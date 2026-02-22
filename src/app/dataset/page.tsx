export default function DatasetPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Dataset</h2>
        <p className="mt-2 text-slate-600">
          Document the KPK station dataset (monthly) and the Texas wind turbine dataset used for cross-dataset validation.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">What to include</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Time range, stations, variables (speed, direction), missing values handling</li>
          <li>Station coordinates (lat/lon)</li>
          <li>Texas dataset source link + how you used it</li>
          <li>Limitations and assumptions</li>
        </ul>
      </div>
    </div>
  );
}