"use client";

import { useMemo, useState } from "react";

export type Station = {
  id: string;
  name: string;
  lat: number;
  lon: number;
  meanSpeed: number;
  prevailingDeg: number;
  forecast: number[];
};

export default function StationSearch({
  stations,
  onSelect,
}: {
  stations: Station[];
  onSelect: (s: Station | null) => void;
}) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return stations.slice(0, 8);
    return stations
      .filter((s) => s.name.toLowerCase().includes(query))
      .slice(0, 8);
  }, [q, stations]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-medium">Search your area (station)</div>
      <p className="mt-1 text-sm text-slate-600">
        Type a district/city/station name (sample data now; replace with your real KPK list).
      </p>

      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          onSelect(null);
        }}
        placeholder="e.g., Peshawar, Mardan, Swat..."
        className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
      />

      <div className="mt-3 grid gap-2">
        {filtered.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelect(s)}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm hover:bg-slate-100"
          >
            <div>
              <div className="font-medium">{s.name}</div>
              <div className="text-xs text-slate-600">
                {s.lat.toFixed(4)}, {s.lon.toFixed(4)}
              </div>
            </div>
            <div className="text-xs text-slate-600">
              mean {s.meanSpeed.toFixed(1)} m/s
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}