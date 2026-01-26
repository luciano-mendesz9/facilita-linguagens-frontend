import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/src/contexts/AuthContexts";
import RouteProgress from "../components/members/preloader";
//import { AppProgressBar } from "next-nprogress-bar";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Facilita Linguagens",
  description: "Plataforma de estimulo gameficado para leitura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-screen w-screen">
      <body
        className={`${poppins.variable} antialiased h-full w-full bg-white`}
      >
         {/* <AppProgressBar
          height="3px"
          color="#29D"
          options={{ showSpinner: false }}
          shallowRouting
        /> */}
        <RouteProgress />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
