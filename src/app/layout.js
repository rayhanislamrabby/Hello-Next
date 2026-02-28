import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});;

 const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning NextJS",
    template: "%s | Learning NextJS",
  },
  keywords: ["next js", "React", "Express" , "NodeJs", "MongoDB"],
description: "Trying To  Learn NextJs as best as we can"

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-arp="">
      <body
        className={`${poppins.className}`}
      >
        <NavBar></NavBar>
        <main className="h-screen h-max-[600px] place-items-center place-content-center">
          {children}
        </main>
        <footer className="text-center bg-slate-600">
          Awosome NentJS projects
        </footer>
      </body>
    </html>
  );
}
