import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Currículum",
  description: "Currículum de Alberto Sánchez Plaza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={dmSans.className}>
      <body>{children}</body>
    </html>
  );
}
