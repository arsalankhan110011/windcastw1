export default function MethodologyPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Methodology</h2>
        <p className="mt-2 text-slate-600">
          Explain your pipeline here: preprocessing, feature engineering, multi-horizon forecasting model, evaluation, and cross-dataset validation.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Suggested sections</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Data collection (KPK monthly station wind + Texas validation dataset)</li>
          <li>Cleaning + standardization</li>
          <li>Transformer-based multi-horizon forecasting</li>
          <li>Baselines (persistence, moving average, etc.)</li>
          <li>Metrics (MAE/RMSE/MAPE)</li>
          <li>Cross-dataset validation results</li>
        </ul>
      </div>
    </div>
  );
}