import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0d14",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
          backgroundImage:
            "linear-gradient(to right, rgba(241,245,249,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,245,249,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#7db3ff", letterSpacing: 2 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#f1f5f9",
              color: "#0a0d14",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            HB
          </div>
          {profile.title.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>{profile.name}</div>
          <div style={{ fontSize: 34, color: "#8b95a7", lineHeight: 1.3, maxWidth: 1000 }}>{profile.headline}</div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 22, color: "#8b95a7" }}>
          <span>React · React Native</span>
          <span>Node.js · MongoDB</span>
          <span>LLM evaluation pipelines</span>
          <span>Vaktora on Google Play</span>
        </div>
      </div>
    ),
    size,
  );
}
