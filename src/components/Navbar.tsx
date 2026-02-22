import Link from "next/link";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/heatmap", label: "Heatmap" },
  { href: "/methodology", label: "Methodology" },
  { href: "/dataset", label: "Dataset" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-blue-600" />
          <div className="leading-tight">
            <div className="font-semibold">WindCast</div>
            <div className="text-xs text-slate-600">Wind Resource + Forecasting (KPK)</div>
          </div>
        </Link>

        <nav className="hidden gap-1 md:flex">
          {tabs.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
            >
              {t.label}
            </Link>
          ))}
        </nav>

        <div className="text-xs text-slate-500 md:text-sm">Static • Research-grade UI</div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-3 md:hidden">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700"
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}