"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import type { Station } from "./StationSearch";

export default function ForecastChart({ station }: { station: Station }) {
  const data = station.forecast.map((v, i) => ({ horizon: `t+${i + 1}`, wind: v }));

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="text-sm font-medium">Forecast (sample multi-horizon)</div>
          <div className="mt-1 text-sm text-slate-600">
            Replace sample forecast array with your model outputs later (API or precomputed JSON).
          </div>
        </div>
        <div className="text-xs text-slate-500">Unit: m/s</div>
      </div>

      <div className="mt-4 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="horizon" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="wind" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}