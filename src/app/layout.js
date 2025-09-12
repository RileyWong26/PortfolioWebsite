import { Anonymous_Pro } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "./providers";

const anonymousPro = Anonymous_Pro({
  variable: "--font-anonymous",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Riley Wong | Software Developer",
  description: "I am a developer passionate about crafting stellar user-driven applications, through robust engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={` ${anonymousPro.className} antialiased`} suppressHydrationWarning>
          <Providers>
            {children}
          </Providers>
      </body>
      
    </html>
  );
}
