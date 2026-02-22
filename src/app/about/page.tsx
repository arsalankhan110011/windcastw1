export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-2 text-slate-600">
          Add your team info, department, supervisor, and acknowledgements.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-sm font-medium">Media placement</div>
        <div className="mt-2 text-sm text-slate-600">
          Put your logos/images in: <code>/public</code> (example: <code>/public/logo-uet.png</code>) then reference as <code>/logo-uet.png</code>.
        </div>
      </div>
    </div>
  );
}