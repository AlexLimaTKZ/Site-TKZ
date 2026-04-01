import type { Metadata } from "next";
import { TimesContent } from "./TimesContent";

export const metadata: Metadata = {
  title: "Times",
  description: "Conheça os jogadores que representam a TKZ E-SPORTS no League of Legends e outros jogos.",
};

export default function TimesPage() {
  return <TimesContent />;
}
