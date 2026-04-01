import type { Metadata } from "next";
import { SobreContent } from "./SobreContent";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Conheça a história da TKZ E-SPORTS. De um grupo de WhatsApp em 2014 a uma organização de e-sports competitiva no cenário brasileiro.",
};

export default function SobrePage() {
  return <SobreContent />;
}
