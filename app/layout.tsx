import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitManager | Gestiona tu negocio de entrenamiento",
  description: "La plataforma para entrenadores personales: clientes, entrenamientos, calendario y seguimiento en un solo lugar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
