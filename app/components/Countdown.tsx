"use client";

import { useEffect, useMemo, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

type Props = {
  minutes: number;
  storageKey: string; // único por modelo, ej: "raul-tomas-endsAt"
};

export default function Countdown({ minutes, storageKey }: Props) {
  const [endMs, setEndMs] = useState<number | null>(null);

  // Cargar/crear endMs solo en cliente
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      const savedMs = saved ? Number(saved) : NaN;

      const now = Date.now();
      const isValid = Number.isFinite(savedMs) && savedMs > now;

      const nextEnd = isValid ? savedMs : now + minutes * 60 * 1000;

      localStorage.setItem(storageKey, String(nextEnd));
      setEndMs(nextEnd);
    } catch {
      // si localStorage falla por algo, fallback normal
      setEndMs(Date.now() + minutes * 60 * 1000);
    }
  }, [minutes, storageKey]);

  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, (endMs ?? now) - now);
  const total = Math.floor(diff / 1000);

  const hours = Math.floor(total / 3600);
  const mins = Math.floor((total % 3600) / 60);
  const secs = total % 60;

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 54, fontWeight: 900, letterSpacing: 1 }}>
        {pad(hours)}:{pad(mins)}:{pad(secs)}
      </div>
      <div style={{ opacity: 0.75, letterSpacing: 5, marginTop: 6 }}>
        HR&nbsp;&nbsp;&nbsp;MIN&nbsp;&nbsp;&nbsp;SEG
      </div>
    </div>
  );
}
