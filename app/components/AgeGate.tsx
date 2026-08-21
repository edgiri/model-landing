"use client";
import { useState } from "react";

export default function AgeGate({ href, children }: { href: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [blocked, setBlocked] = useState(false);

  const handleClick = () => {
    const ua = navigator.userAgent || "";
    const isInAppBrowser = ua.includes("Instagram") || ua.includes("FBAN") || ua.includes("FBAV");
    if (isInAppBrowser) {
      setBlocked(true);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <div onClick={handleClick} style={{ cursor: "pointer", display: "block", position: "relative", width: "100%", borderRadius: 16, overflow: "hidden" }}>
        {children}
      </div>

      {/* Bloqueado en IG — pide abrir en Safari */}
      {blocked && (
        <div
          onClick={() => setBlocked(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "grid", placeItems: "center", zIndex: 9999, backdropFilter: "blur(8px)" }}
        >
          <div style={{ background: "white", color: "black", padding: "28px 24px", borderRadius: 20, maxWidth: 300, width: "90vw", textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🌐</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Abre en tu navegador</div>
            <div style={{ fontSize: 14, color: "#555", marginBottom: 20, lineHeight: 1.5 }}>
              Toca <strong>•••</strong> arriba a la derecha y selecciona <strong>"Abrir en navegador"</strong> para continuar.
            </div>
            <button
              onClick={() => setBlocked(false)}
              style={{ padding: "10px 24px", borderRadius: 999, border: "1px solid #ddd", background: "transparent", fontSize: 14, cursor: "pointer" }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Age verification */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "grid", placeItems: "center", zIndex: 9999, backdropFilter: "blur(8px)" }}
        >
          <div style={{ background: "rgba(80,0,30,0.95)", border: "1px solid rgba(255,80,140,0.3)", borderRadius: 20, padding: "36px 32px", maxWidth: 340, width: "90vw", textAlign: "center", color: "white" }}>
            <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>Verificación de edad</div>
            <div style={{ opacity: 0.75, fontSize: 14, marginBottom: 28 }}>Este contenido es solo para mayores de 18.</div>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => setOpen(false)}
                style={{ flex: 1, padding: "14px 0", borderRadius: 999, border: "1px solid rgba(255,255,255,0.3)", background: "transparent", color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
              >Soy menor</button>
              <button
                onClick={() => {
                  // Detectar iOS vs Android para deep link
                  const ua = navigator.userAgent || "";
                  const isIOS = /iPad|iPhone|iPod/.test(ua);
                  const isAndroid = /Android/.test(ua);
                  if (isIOS) {
                    window.location.href = href;
                  } else if (isAndroid) {
                    window.open(href, "_blank");
                  } else {
                    window.open(href, "_blank");
                  }
                  setOpen(false);
                }}
                style={{ flex: 2, padding: "14px 0", borderRadius: 999, border: "none", background: "linear-gradient(135deg, #e91e8c, #c2185b)", color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
              >Soy mayor de 18, Continuar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
