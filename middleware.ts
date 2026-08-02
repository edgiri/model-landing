import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BOT_SIGNATURES = [
  "facebookexternalhit","facebookcatalog","meta-externalagent","meta-externalfetcher",
  "linkedinbot","twitterbot","telegrambot","whatsapp","bingbot","googlebot",
  "applebot","slackbot","discordbot","crawler","spider","scraper","headlesschrome",
  "phantomjs","python-requests","curl/","wget/","axios/","python/","java/","go-http",
  "okhttp","aiohttp","httpx",
];



const DATACENTER_ASNS = ["AS16509","AS14618","AS15169","AS8075","AS20940","AS13335","AS16276","AS14061","AS13238"];

const NEUTRAL_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Raul Tomas</title>
  <meta name="description" content="Content creator and model."/>
</head>
<body style="margin:0;background:#000;color:#fff;font-family:sans-serif;display:grid;place-items:center;min-height:100vh;">
  <div style="text-align:center;">
    <h1>Raul Tomas</h1>
    <p>Content creator · Madrid, Spain</p>
  </div>
</body>
</html>`;

export function middleware(request: NextRequest) {
  const ua = (request.headers.get("user-agent") || "").toLowerCase();
  const referer = (request.headers.get("referer") || "").toLowerCase();
  const asn = request.headers.get("x-vercel-ip-asn") || "";
  const accept = request.headers.get("accept") || "";
  const acceptLang = request.headers.get("accept-language") || "";

  const isBotUA = BOT_SIGNATURES.some((sig) => ua.includes(sig));
  
  const isDatacenter = DATACENTER_ASNS.includes(asn);
    const isEmptyUA = ua.trim() === "";

  if (isBotUA || isDatacenter || isEmptyUA) {
    return new NextResponse(NEUTRAL_HTML, {
      status: 200,
      headers: { "content-type": "text/html" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
