"use client";

import { useEffect, useMemo, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown({ minutes = 15 }: { minutes?: number }) {
  const totalSeconds = useMemo(() => minutes * 60, [minutes]);
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

  useEffect(() => {
    setSecondsLeft(totalSeconds);
    const t = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, [totalSeconds]);

  const mm = Math.floor(secondsLeft / 60);
  const ss = secondsLeft % 60;

  const expired = secondsLeft === 0;

  return (
    <div
      style={{
        marginTop: 14,
        padding: "14px 18px",
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.06)",
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <div style={{ fontSize: 14, opacity: 0.8 }}>
        {expired ? "Offer ended" : "Limited access"}
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 800,
          letterSpacing: 1,
          minWidth: 92,
          textAlign: "right",
        }}
      >
        {pad(mm)}:{pad(ss)}
      </div>
    </div>
  );
}
