"use client";

import { useMemo, useRef, useState } from "react";
import StationSearch, { Station } from "@/components/StationSearch";
import MetricCards from "@/components/MetricCards";
import ForecastChart from "@/components/ForecastChart";
import stationsData from "@/data/stations.sample.json";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ExplorePage() {
  const stations = useMemo(() => stationsData as Station[], []);
  const [selected, setSelected] = useState<Station | null>(null);
  const reportRef = useRef<HTMLDivElement>(null);

  async function downloadPDF() {
    if (!reportRef.current || !selected) return;

    const canvas = await html2canvas(reportRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgRatio = imgProps.width / imgProps.height;

    const w = pageWidth;
    const h = w / imgRatio;

    let y = 10;
    pdf.setFontSize(14);
    pdf.text("WindCast Site Screening Report", 10, y);
    y += 6;
    pdf.setFontSize(10);
    pdf.text(`Station: ${selected.name}`, 10, y);
    y += 6;
    pdf.text(`Generated: ${new Date().toLocaleString()}`, 10, y);
    y += 6;

    const imgY = y + 2;
    const imgH = Math.min(h, pageHeight - imgY - 10);

    pdf.addImage(imgData, "PNG", 0, imgY, w, imgH);
    pdf.save(`WindCast_Report_${selected.name.replaceAll(" ", "_")}.pdf`);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Explore</h2>
        <p className="mt-2 text-slate-600">
          Search a station and generate a screening report: wind speed, direction, suitability, and a sample forecast curve.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <StationSearch stations={stations} onSelect={setSelected} />
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-sm">
            <div className="font-medium text-slate-900">How you’ll connect real data</div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Replace <code>stations.sample.json</code> with your KPK station JSON.</li>
              <li>Add forecast arrays from your Transformer outputs (precomputed).</li>
              <li>Later, connect a model API (optional) — but your current request is static.</li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-8 space-y-6">
          {!selected ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-sm">
              Select a station to view metrics and forecast.
            </div>
          ) : (
            <>
              <div ref={reportRef} className="space-y-6">
                <MetricCards station={selected} />
                <ForecastChart station={selected} />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={downloadPDF}
                  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Download PDF report
                </button>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                  Tip: Put your university logo in <code>/public</code> and we can add it to the PDF header.
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}