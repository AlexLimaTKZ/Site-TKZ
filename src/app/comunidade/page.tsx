import type { Metadata } from "next";
import ComunidadeContent from "./ComunidadeContent";

export const metadata: Metadata = {
  title: "Comunidade",
  description:
    "Faça parte da comunidade TKZ E-Sports. Conecte-se pelo Discord, Instagram e WhatsApp.",
  openGraph: {
    title: "Comunidade | TKZ E-SPORTS",
    description:
      "Faça parte da comunidade TKZ E-Sports. Conecte-se pelo Discord, Instagram e WhatsApp.",
  },
};

export default function ComunidadePage() {
  return <ComunidadeContent />;
}
