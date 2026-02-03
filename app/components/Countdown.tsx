"use client";

import { useEffect, useMemo, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown({ endsAtISO }: { endsAtISO: string }) {
  const end = useMemo(() => new Date(endsAtISO).getTime(), [endsAtISO]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, end - now);
  const total = Math.floor(diff / 1000);

  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 54, fontWeight: 900, letterSpacing: 1 }}>
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </div>
      <div style={{ opacity: 0.75, letterSpacing: 5, marginTop: 6 }}>
        HR&nbsp;&nbsp;&nbsp;MIN&nbsp;&nbsp;&nbsp;SEG
      </div>
    </div>
  );
}

