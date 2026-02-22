import { degToCompass, iecClassFromMean, powerDensityWm2, siteSuitability } from "@/lib/wind";
import type { Station } from "./StationSearch";

export default function MetricCards({ station }: { station: Station }) {
  const pd = powerDensityWm2(station.meanSpeed);
  const iec = iecClassFromMean(station.meanSpeed);
  const suit = siteSuitability(station.meanSpeed);

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card title="Mean wind speed" value={`${station.meanSpeed.toFixed(2)} m/s`} sub="Screening-level metric" />
      <Card title="Power density (est.)" value={`${pd.toFixed(0)} W/m²`} sub="0.5·ρ·v³ (ρ≈1.225)" />
      <Card title="Prevailing direction" value={`${station.prevailingDeg}° (${degToCompass(station.prevailingDeg)})`} sub="From sample metadata" />
      <Card title="Site suitability" value={suit.label} sub={suit.note} />

      <div className="md:col-span-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="text-sm font-medium">Turbine guidance (simple)</div>
        <div className="mt-2 text-sm text-slate-700">
          <span className="font-medium">Recommended class:</span> {iec}
        </div>
        <div className="mt-2 text-sm text-slate-600">
          This is screening guidance for an FYP demo. Real projects require on-site measurements, terrain/roughness, hub height correction,
          micro-siting, wake analysis, and economics.
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, sub }: { title: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-xs text-slate-600">{title}</div>
      <div className="mt-2 text-xl font-semibold">{value}</div>
      <div className="mt-1 text-xs text-slate-600">{sub}</div>
    </div>
  );
}