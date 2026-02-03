import { headers } from "next/headers";
import Countdown from "./components/Countdown";

export default async function Page() {
  // Aproximado por IP (en Vercel suele venir, en local puede ser vacío)
  const h = await headers();
  const city = h.get("x-vercel-ip-city") || "";
  const country = h.get("x-vercel-ip-country") || "";
  const locationText =
    city || country ? `${city}${city && country ? ", " : ""}${country}` : "Unknown location";

  // Cambia esto por el nombre del modelo
  const MODEL_NAME = "RAUL TOMAS";

  // Cambia links
  const LINKS = {
    of: "https://onlyfans.com/raulthomasss", // OF (principal)
    instagram: "https://www.instagram.com/raul.tomass/",
    Facebook: "https://www.facebook.com/people/Raul-Tomas/pfbid0C6XECbaQUvRzTFWaxxdXYvBGFR7ujoBM7fQ2hQep3gxzXeMKmJcikwpMo5PZ5c2Tl/?mibextid=wwXIfr&rdid=vbuhLxqsnMedqhrJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AQZNvoQhb%2F%3Fmibextid%3DwwXIfr",
    x: "https://x.com/mamuttdehielo?s=21",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 50% 0%, rgba(255,255,255,0.10), rgba(0,0,0,1))",
        color: "white",
        display: "grid",
        placeItems: "center",
        padding: 24,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
      }}
    >
      <div style={{ width: "100%", maxWidth: 720 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 52, fontWeight: 900, letterSpacing: -1 }}>
            {MODEL_NAME}
          </div>

          <div style={{ marginTop: 10, fontSize: 14, opacity: 0.75 }}>
            Viewing from: <span style={{ fontWeight: 700 }}>{locationText}</span>
          </div>

          <Countdown minutes={15} />

          {/* Botón principal */}
          <a
            href={LINKS.of}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              margin: "26px auto 0",
              textDecoration: "none",
              padding: "18px 18px",
              borderRadius: 18,
              fontWeight: 900,
              fontSize: 18,
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.12)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
            }}
          >
            ⭐️ Unlock Full Access (OF)
          </a>

          {/* Links secundarios */}
          <div
            style={{
              marginTop: 18,
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              style={chipStyle}
            >
              📸 Instagram
            </a>
            <a href={LINKS.tiktok} target="_blank" rel="noreferrer" style={chipStyle}>
              🎵 TikTok
            </a>
            <a href={LINKS.x} target="_blank" rel="noreferrer" style={chipStyle}>
              🐦 X
            </a>
          </div>

          <div style={{ marginTop: 18, fontSize: 12, opacity: 0.6 }}>
            Location is approximate (IP-based). Timer is on-page (resets on refresh).
          </div>
        </div>
      </div>
    </main>
  );
}

const chipStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "white",
  padding: "10px 14px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.06)",
  fontWeight: 700,
  fontSize: 14,
};
