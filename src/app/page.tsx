import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <h1 className="text-3xl font-semibold tracking-tight">
              WindCast FYP — Wind Resource Screening + Multi-Horizon Forecasting (KPK)
            </h1>
            <p className="mt-3 text-slate-600">
              A research-grade, static web platform that helps users evaluate wind potential for their area,
              explore station-level wind characteristics, and view short future forecasts for planning.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/explore"
                className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Open Explore
              </Link>
              <Link
                href="/heatmap"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
              >
                View Heatmap
              </Link>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-xs text-slate-600">Focus</div>
                <div className="font-medium">KPK monthly stations</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-xs text-slate-600">Forecasting</div>
                <div className="font-medium">Multi-horizon model UI</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-xs text-slate-600">Output</div>
                <div className="font-medium">PDF site report</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm font-medium">What users can do</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Search a station/area and see mean wind speed and direction.</li>
                <li>Get simple turbine suitability guidance (screening-level).</li>
                <li>View a forecast curve (static demo; later connect API/model).</li>
                <li>Download a PDF report for documentation.</li>
                <li>Explore geographic distribution via heatmap/map.</li>
              </ul>
              <div className="mt-4 text-xs text-slate-600">
                Note: This static build is designed for FYP presentation; you can replace sample data with your real dataset.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Academic UI", "Clean cards, IEEE-ish layout, readable plots and maps."],
          ["Future-proof", "Swap JSON for your real dataset; later connect ML inference API."],
          ["Deployable", "GitHub + Vercel pipeline supported out of the box."]
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="font-medium">{t}</div>
            <div className="mt-2 text-sm text-slate-600">{d}</div>
          </div>
        ))}
      </section>
    </div>
  );
}