import type { Metadata } from "next";
import { RedesSociaisContent } from "./RedesSociaisContent";

export const metadata: Metadata = {
  title: "Redes Sociais",
  description: "Conecte-se com a TKZ E-SPORTS no Discord, Instagram e WhatsApp. Fique por dentro das novidades.",
};

export default function RedesSociaisPage() {
  return <RedesSociaisContent />;
}
