
[main 704bb8f] comprimir imágenes
 3 files changed, 0 insertions(+), 0 deletions(-)
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 16 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 252.01 KiB | 36.00 MiB/s, done.
Total 6 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/edgiri/model-landing.git
   3c3b2d0..704bb8f  main -> main
edgiri@MacBook-Pro-de-Edgar model-landing % cd ~/model-landing
git add .
git commit -m "comprimir imágenes"
git push
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
Everything up-to-date
edgiri@MacBook-Pro-de-Edgar model-landing % 
edgiri@MacBook-Pro-de-Edgar model-landing % 
edgiri@MacBook-Pro-de-Edgar model-landing % cat ~/model-landing/app/page.tsx
import Image from "next/image";
import { headers } from "next/headers";
import Countdown from "./components/Countdown";

function IconButton({ href, text, emoji }: { 
  href: string; 
  text: string; 
  emoji?: string 
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        minWidth: 72,
        height: 72,
        borderRadius: 20,
        background: "rgba(255,255,255,0.13)",
        border: "1px solid rgba(255,255,255,0.20)",
        display: "grid",
        placeItems: "center",
        textDecoration: "none",
        color: "white",
        fontWeight: 800,
        fontSize: "14.5px",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        transition: "all 0.25s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.24)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.13)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {emoji && <span style={{ fontSize: "18px", marginBottom: 3 }}>{emoji}</span>}
      {text}
    </a>
  );
}

export default async function Page() {
  const h = await headers();
  const city = h.get("x-vercel-ip-city") || "";
  const country = h.get("x-vercel-ip-country") || "";
  const location = city && country ? `${city}, ${country}` : "🌍 Online Now";

  // === DATOS DE ERIN MIA JAMES ===
  const NAME = "ERIN MIA JAMES";
  const PROMO = "75% OFF · JUST TODAY";

  const LINK_OF = "https://onlyfans.com/erinmiajames";
  const LINK_IG = "https://www.instagram.com/erinmiajamesagain/";
  const LINK_TIKTOK = "https://www.tiktok.com/@itserinmiajames";

  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      position: "relative",
      overflow: "hidden",
      padding: "clamp(12px, 4vw, 28px)",
      background: "#050505",
    }}>
      {/* Fondo */}
      <Image 
        src="/bg.jpg" 
        alt="background" 
        fill 
        priority 
        style={{ objectFit: "cover", opacity: 0.9 }} 
      />

      {/* Tarjeta principal */}
      <div style={{
        width: "min(428px, 92vw)",
        borderRadius: "clamp(24px, 5vw, 34px)",
        padding: "clamp(22px, 5.5vw, 34px)",
        background: "rgba(255,255,255,0.09)",
        border: "1px solid rgba(255,255,255,0.16)",
        boxShadow: "0 30px 90px rgba(0,0,0,0.55)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        color: "white",
      }}>
        <div style={{ display: "grid", placeItems: "center", gap: "clamp(14px, 3.5vw, 20px)" }}>

          {/* Avatar */}
          <div style={{
            width: "clamp(96px, 21vw, 122px)",
            height: "clamp(96px, 21vw, 122px)",
            borderRadius: "999px",
            overflow: "hidden",
            border: "5px solid rgba(255,255,255,0.95)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
          }}>
            <Image 
              src="/avatar.jpg" 
              alt="Erin Mia James" 
              width={130} 
              height={130} 
              style={{ objectFit: "cover" }} 
            />
          </div>

          {/* Nombre + Ubicación */}
          <div style={{ textAlign: "center" }}>
            <h1 style={{
              fontSize: "clamp(34px, 8.2vw, 50px)",
              fontWeight: 900,
              letterSpacing: "-1px",
              lineHeight: 1.05,
              margin: 0,
            }}>
              {NAME}
            </h1>
            <p style={{ 
              opacity: 0.85, 
              fontSize: "clamp(15.5px, 4.1vw, 19px)", 
              margin: "8px 0 0" 
            }}>
              {location}
            </p>
          </div>

          {/* Promo */}
          <div>
            <span style={{
              padding: "11px 26px",
              borderRadius: "999px",
              background: "rgba(255, 60, 120, 0.22)",
              border: "1px solid rgba(255, 80, 140, 0.45)",
              color: "#ff4d94",
              fontWeight: 900,
              fontSize: "clamp(19px, 5vw, 24px)",
              letterSpacing: "0.6px",
            }}>
              {PROMO}
            </span>
          </div>

          {/* Foto + Countdown */}
          <div style={{
            width: "100%",
            borderRadius: "clamp(18px, 4.5vw, 26px)",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.17)",
            background: "rgba(0,0,0,0.28)",
          }}>
            <a 
              href={LINK_OF} 
              target="_blank" 
              rel="noreferrer" 
              style={{ display: "block", position: "relative" }}
            >
              <Image
                src="/card.jpg"
                alt="Erin Mia James"
                width={900}
                height={520}
                style={{
                  width: "100%",
                  height: "clamp(195px, 46vw, 270px)",
                  objectFit: "cover",
                }}
              />
              <div style={{
                position: "absolute",
                top: 16,
                right: 16,
                padding: "9px 16px",
                borderRadius: 999,
                background: "rgba(0,0,0,0.70)",
                border: "1px solid rgba(255,255,255,0.25)",
                fontSize: "13px",
                fontWeight: 900,
                backdropFilter: "blur(10px)",
              }}>
                ONLYFANS 🔒
              </div>
            </a>

            <div style={{ padding: "clamp(16px, 4vw, 22px)" }}>
              <Countdown minutes={15} storageKey="erin-mia-james-endsAt" />
            </div>
          </div>

          {/* Redes Sociales */}
          <div style={{ 
            display: "flex", 
            gap: 16, 
            marginTop: 12, 
            flexWrap: "wrap", 
            justifyContent: "center" 
          }}>
            <IconButton href={LINK_OF} text="ONLYFANS" emoji="🔥" />
            <IconButton href={LINK_IG} text="INSTAGRAM" emoji="📷" />
            <IconButton href={LINK_TIKTOK} text="TIKTOK" emoji="🎵" />
          </div>

        </div>
      </div>
    </main>
  );
}%                                                                                                                      edgiri@MacBook-Pro-de-Edgar model-landing % 
