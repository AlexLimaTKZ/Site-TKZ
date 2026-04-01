import type { Metadata } from "next";
import { StreamersContent } from "./StreamersContent";

export const metadata: Metadata = {
  title: "Streamers",
  description: "Conheça os streamers da TKZ E-SPORTS. Acompanhe as lives na Twitch e TikTok.",
};

export default function StreamersPage() {
  return <StreamersContent />;
}
