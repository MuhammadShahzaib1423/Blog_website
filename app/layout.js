import { Geist, Geist_Mono } from "next/font/google";

import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weights: ["400", "500", "600","700"],
});



export const metadata = {
       title: "Blog App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        {children}
      </body>
    </html>
  );
}
