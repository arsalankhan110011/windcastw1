"use client";

import MapStations from "@/components/MapStations";
import stationsData from "@/data/stations.sample.json";
import type { Station } from "@/components/StationSearch";
import { useMemo } from "react";

export default function HeatmapPage() {
  const stations = useMemo(() => stationsData as Station[], []);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Heatmap</h2>
        <p className="mt-2 text-slate-600">
          Geographic overview of wind resource using station markers. This is a static visualization designed for your FYP demo.
        </p>
      </div>

      <MapStations stations={stations} />
    </div>
  );
}