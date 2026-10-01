import { ImageResponse } from "next/og";

export const alt = "Castel Physio — Augustin Castel, kinésithérapeute du sport à Bruxelles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "linear-gradient(135deg, #0a1929 0%, #102a43 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#FF5757" }}>
          Kinésithérapie du sport · Bruxelles
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 28, lineHeight: 1.1 }}>
          Augustin Castel
        </div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#bcccdc" }}>
          Castel Physio · Soins, coaching et formations evidence-based
        </div>
      </div>
    ),
    { ...size }
  );
}
