"use client";
import { useState } from "react";

export default function AgeGate({ href, children }: { href: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} style={{ cursor: "pointer", display: "block", position: "relative", width: "100%", borderRadius: 16, overflow: "hidden" }}>
        {children}
      </div>

      {open && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)",
          display: "grid", placeItems: "center", zIndex: 9999,
          backdropFilter: "blur(8px)",
        }}>
          <div style={{
            background: "rgba(80,0,30,0.95)",
            border: "1px solid rgba(255,80,140,0.3)",
            borderRadius: 20, padding: "36px 32px",
            maxWidth: 340, width: "90vw", textAlign: "center", color: "white",
          }}>
            <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>Verificación de edad</div>
            <div style={{ opacity: 0.75, fontSize: 14, marginBottom: 28 }}>
              Este contenido es solo para mayores de 18.
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => setOpen(false)}
                style={{
                  flex: 1, padding: "14px 0", borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.3)", background: "transparent",
                  color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer",
                }}
              >Soy menor</button>
              <button
                onClick={() => { window.open(href, "_blank"); setOpen(false); }}
                style={{
                  flex: 2, padding: "14px 0", borderRadius: 999,
                  border: "none", background: "linear-gradient(135deg, #e91e8c, #c2185b)",
                  color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer",
                }}
              >Soy mayor de 18</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
