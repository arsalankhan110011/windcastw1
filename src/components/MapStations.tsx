"use client";

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import type { Station } from "./StationSearch";
import { siteSuitability } from "@/lib/wind";

function radiusFromSpeed(v: number) {
  return 6 + Math.max(0, v) * 2; // visual sizing
}

function colorFromSpeed(v: number) {
  if (v >= 6) return "#16a34a";   // green
  if (v >= 4.5) return "#2563eb"; // blue
  if (v >= 3.5) return "#f59e0b"; // amber
  return "#ef4444";              // red
}

export default function MapStations({ stations }: { stations: Station[] }) {
  const center: [number, number] = [34.0, 71.5]; // KPK-ish center (adjust later)

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="text-sm font-medium">Station map (heat-like markers)</div>
          <div className="mt-1 text-sm text-slate-600">
            Replace sample station coordinates with your real KPK coordinates for true heatmap behavior.
          </div>
        </div>
        <div className="text-xs text-slate-500">Marker size ≈ mean speed</div>
      </div>

      <div className="mt-4 h-[520px] w-full overflow-hidden rounded-2xl border border-slate-200">
        <MapContainer center={center} zoom={7} scrollWheelZoom className="h-full w-full">
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {stations.map((s) => {
            const suit = siteSuitability(s.meanSpeed);
            return (
              <CircleMarker
                key={s.id}
                center={[s.lat, s.lon]}
                radius={radiusFromSpeed(s.meanSpeed)}
                pathOptions={{ color: colorFromSpeed(s.meanSpeed), fillOpacity: 0.55 }}
              >
                <Popup>
                  <div className="space-y-1">
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-sm">Mean: {s.meanSpeed.toFixed(2)} m/s</div>
                    <div className="text-sm">Suitability: {suit.label}</div>
                  </div>
                </Popup>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}