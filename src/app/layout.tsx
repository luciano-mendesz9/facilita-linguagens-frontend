import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/src/contexts/AuthContexts";
import RouteProgress from "../components/members/preloader";
import { ScreenProvider } from "../contexts/ScreenContexts";
import { getUser } from "../functions";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Facilita Linguagens",
  description: "Plataforma de estimulo gameficado para leitura",
};

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const user = await getUser();

  return (
    <html lang="pt-br" className="h-screen w-screen">
      <body
        className={`${poppins.variable} antialiased h-full w-full bg-white`}
      >
        <RouteProgress />
        <ScreenProvider>
          {children}
        </ScreenProvider>
        
      </body>
    </html>
  );
}
