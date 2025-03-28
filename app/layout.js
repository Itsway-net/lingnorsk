// Импортируем шрифты и стили
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Именованный экспорт PageLayout
export function PageLayout({ children }) {
  return (
    <div>
      {/* Здесь выводится контент всех страниц */}
      {children}
    </div>
  );
}

// Default export для RootLayout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// Именованный экспорт metadata
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

