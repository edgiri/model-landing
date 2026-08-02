import Image from "next/image";
import { headers } from "next/headers";
import Countdown from "./components/Countdown";

const IconIG = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
  </svg>
);

const IconX = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h6.832l4.258 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

const IconFB = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const BadgeVerified = () => (
  <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="11" fill="#1d9bf0"/>
    <path d="M6 11.5l3.5 3.5 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function SocialButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={"_blank"}
      rel={"noreferrer"}
      style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "rgba(0,0,0,0.8)",
        border: "1px solid rgba(255,255,255,0.15)",
        display: "grid",
        placeItems: "center",
        textDecoration: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
      }}
    >
      {children}
    </a>
  );
}

export default async function Page() {
  const h = await headers();
  const city = h.get("x-vercel-ip-city") || "";
  const country = h.get("x-vercel-ip-country") || "";
  const location = "Madrid, Spain";

  const NAME = "Raul Tomas";
  const PROMO = "60% OFF · JUST TODAY";
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
        background: "#000",
        padding: "clamp(12px, 4vw, 28px)",
      }}
    >
      <Image src="/bg.jpg" alt="background" fill priority style={{ objectFit: "cover", opacity: 0.5 }} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "min(400px, 92vw)",
          borderRadius: 28,
          overflow: "hidden",
          color: "white",
        }}
      >
        {/* HERO IMAGE */}
        <div style={{ position: "relative", width: "100%", height: "clamp(320px, 70vw, 440px)" }}>
          <Image src="/avatar.jpg" alt="Raul Tomas" fill priority style={{ objectFit: "cover", objectPosition: "top" }} />
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "65%",
            background: "linear-gradient(to bottom, transparent, #000)",
          }} />

          {/* Nombre + verificado */}
          <div style={{
            position: "absolute", bottom: 78, left: 0, right: 0,
            textAlign: "center",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          }}>
            <span style={{ fontSize: "clamp(18px, 4.5vw, 24px)", fontWeight: 800 }}>{NAME}</span>
            <BadgeVerified />
          </div>

          {/* Botones sociales */}
          <div style={{
            position: "absolute", bottom: 14, left: 0, right: 0,
            display: "flex", gap: 12, justifyContent: "center",
          }}>
            <SocialButton href={LINK_IG}><IconIG /></SocialButton>
            <SocialButton href={LINK_X}><IconX /></SocialButton>
            <SocialButton href={LINK_FB}><IconFB /></SocialButton>
          </div>
        </div>

        {/* BODY */}
        <div style={{
          background: "#000",
          display: "grid",
          placeItems: "center",
          gap: 14,
          padding: "16px 20px 28px",
        }}>
          {/* Ubicación */}
          {location && <div style={{ opacity: 0.5, fontSize: 13 }}>{location}</div>}

          <div style={{ opacity: 0.45, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>My socials</div>

          {/* PROMO */}
          <div style={{
            padding: "10px 28px",
            borderRadius: 999,
            background: "rgba(0,200,255,0.1)",
            border: "1px solid rgba(0,200,255,0.3)",
            fontWeight: 800,
            fontSize: "clamp(12px, 3vw, 14px)",
            letterSpacing: 1,
            color: "rgba(0,200,255,0.95)",
          }}>
            {PROMO}
          </div>

          {/* COUNTDOWN */}
          <div style={{ transform: "scale(0.62)", transformOrigin: "center top", marginBottom: -8 }}>
            <Countdown minutes={15} storageKey="raul-tomas-endsAt" />
          </div>

          {/* CARD IMAGE */}
          <a
            href={LINK_MAIN}
            target={"_blank"}
            rel={"noreferrer"}
            style={{ display: "block", position: "relative", width: "100%", borderRadius: 16, overflow: "hidden" }}
          >
            <Image
              src="/card.jpg"
              alt="exclusive"
              width={900}
              height={500}
              style={{
                width: "100%",
                height: "clamp(160px, 40vw, 220px)",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "12px 0",
              textAlign: "center",
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: 1,
              color: "white",
              background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
            }}>
              🩵 EXCLUSIVE CONTENT · CLICK HERE
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}