import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import WhatsAppChat from "@/components/WhatsAppChat";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased bg-slate-100  overflow-x-hidden`}>
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}
