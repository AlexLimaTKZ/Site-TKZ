import type { Metadata } from "next";
import { StaffContent } from "./StaffContent";

export const metadata: Metadata = {
  title: "Staff",
  description: "Conheça a equipe por trás do sucesso da TKZ E-SPORTS. Fundador, administradores, coaches e psicólogo.",
};

export default function StaffPage() {
  return <StaffContent />;
}
