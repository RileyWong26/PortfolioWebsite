import { Geist, Geist_Mono } from "next/font/google";
import { Anonymous_Pro } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anonymousPro = Anonymous_Pro({
  variable: "--font-anonymous",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Riley Wong",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anonymousPro.className} antialiased`}
      >
        {children}
        
      </body>
      
    </html>
  );
}
