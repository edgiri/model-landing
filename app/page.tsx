import Image from "next/image";
import { headers } from "next/headers";
import Countdown from "./components/Countdown";

function IconButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        width: 64,
        height: 64,
        borderRadius: 18,
        background: "rgba(255,255,255,0.13)",
        border: "1px solid rgba(255,255,255,0.18)",
        display: "grid",
        placeItems: "center",
        textDecoration: "none",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      }}
    >
      {children}
    </a>
  );
}

const IconIG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="6" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="rgba(255,255,255,0.85)"/>
  </svg>
);

const IconX = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h6.832l4.258 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

const IconFB = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default async function Page() {
  const h = await headers();
  const city = h.get("x-vercel-ip-city") || "";
  const country = h.get("x-vercel-ip-country") || "";
  const location = city && country ? `${city}, ${country}` : "Desconocida";

  const NAME = "RAUL TOMAS";
  const PROMO = "60% OFF";

  const LINK_MAIN = "https://onlyfans.com/raulthomasss";
  const LINK_IG = "https://www.instagram.com/raul.tomass/";
  const LINK_X = "https://x.com/mamuttdehielo?s=21";
  const LINK_FB = "https://www.facebook.com/profile.php?id=61586974165190";

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(12px, 4vw, 28px)",
      }}
    >
      <Image src="/bg.jpg" alt="background" fill priority style={{ objectFit: "cover" }} />

      <div
        style={{
          width: "min(420px, 92vw)",
          borderRadius: "clamp(20px, 4vw, 28px)",
          padding: "clamp(16px, 4vw, 26px)",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 20px 70px rgba(0,0,0,0.35)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          color: "white",
        }}
      >
        <div style={{ display: "grid", placeItems: "center", gap: "clamp(10px, 2.8vw, 14px)" }}>
          {/* AVATAR */}
          <div
            style={{
              width: "clamp(84px, 18vw, 112px)",
              height: "clamp(84px, 18vw, 112px)",
              borderRadius: 999,
              overflow: "hidden",
              border: "4px solid rgba(255,255,255,0.9)",
            }}
          >
            <Image src="/avatar.jpg" alt="avatar" width={112} height={112} style={{ objectFit: "cover" }} />
          </div>

          {/* NOMBRE + UBICACIÓN */}
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "clamp(30px, 7.5vw, 44px)", fontWeight: 900, letterSpacing: 1, lineHeight: 1.05 }}>
              {NAME}
            </div>
            <div style={{ opacity: 0.9, fontSize: "clamp(16px, 4.2vw, 20px)" }}>{location}</div>
          </div>

          {/* PROMO */}
          <div style={{ marginTop: 6, marginBottom: 6 }}>
            <span
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                background: "rgba(0, 200, 255, 0.20)",
                border: "1px solid rgba(0,200,255,0.35)",
                color: "rgba(0,200,255,0.95)",
                fontWeight: 900,
                letterSpacing: 1,
                fontSize: "clamp(19px, 5vw, 24px)",
              }}
            >
              {PROMO}
            </span>
          </div>

          {/* FOTO + COUNTDOWN */}
          <div
            style={{
              width: "100%",
              borderRadius: "clamp(16px, 3.8vw, 22px)",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(0,0,0,0.2)",
            }}
          >
            <a href={LINK_MAIN} target="_blank" rel="noreferrer" style={{ display: "block", position: "relative" }}>
              <Image
                src="/card.jpg"
                alt="card"
                width={900}
                height={900}
                style={{
                  width: "100%",
                  height: "clamp(170px, 42vw, 240px)",
                  objectFit: "cover",
                  cursor: "pointer",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  padding: "8px 12px",
                  borderRadius: 999,
                  background: "rgba(0,0,0,0.55)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  fontWeight: 900,
                  fontSize: 12,
                  color: "white",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                🔒
              </div>
            </a>

            <div style={{ padding: "clamp(12px, 3vw, 18px)" }}>
              <Countdown minutes={15} storageKey="raul-tomas-endsAt" />
            </div>
          </div>

          {/* LINKS */}
          <div style={{ display: "flex", gap: 14, marginTop: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <IconButton href={LINK_IG}><IconIG /></IconButton>
            <IconButton href={LINK_X}><IconX /></IconButton>
            <IconButton href={LINK_FB}><IconFB /></IconButton>
          </div>
        </div>
      </div>
    </main>
  );
}
