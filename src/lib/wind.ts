export function powerDensityWm2(v: number) {
  // Very simplified: P/A = 0.5 * rho * v^3, rho ~ 1.225 kg/m^3
  const rho = 1.225;
  return 0.5 * rho * Math.pow(Math.max(v, 0), 3);
}

export function iecClassFromMean(v: number) {
  // Simplified guidance (not a certification):
  // IEC I: 10 m/s, II: 8.5, III: 7.5 at reference; we map mean to a “likely” class.
  if (v >= 7.0) return "Likely IEC I (high wind)";
  if (v >= 5.5) return "Likely IEC II (medium-high wind)";
  if (v >= 4.0) return "Likely IEC III (medium wind)";
  return "Low wind site — consider low-wind turbines / taller hub height";
}

export function siteSuitability(v: number) {
  // Simple screening buckets for a student FYP demo.
  if (v >= 6.0) return { label: "Good", note: "Strong potential for small/medium wind depending on constraints." };
  if (v >= 4.5) return { label: "Moderate", note: "Feasible with careful turbine selection and hub height." };
  if (v >= 3.5) return { label: "Marginal", note: "May work for specialized low-wind turbines; verify with on-site measurements." };
  return { label: "Poor", note: "Likely not economical without exceptional conditions." };
}

export function degToCompass(deg: number) {
  const dirs = ["N","NE","E","SE","S","SW","W","NW"];
  const i = Math.round((((deg % 360) + 360) % 360) / 45) % 8;
  return dirs[i];
}