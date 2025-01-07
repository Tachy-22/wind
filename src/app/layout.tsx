import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "$WIND - Revolutionary Web3 Meme Token for Sustainable Energy",
  description: "Join the future of sustainable energy with $WIND - the first Web3 meme token combining AI and renewable energy. Early investors welcome.",
  keywords: "wind token, crypto, web3, sustainable energy, meme token, blockchain",
  openGraph: {
    title: "$WIND - Revolutionary Web3 Meme Token",
    description: "The future of renewable energy meets Web3. Join the revolution with $WIND token.",
    images: ['/WIND24.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "$WIND - Revolutionary Web3 Meme Token",
    description: "The future of renewable energy meets Web3. Join the revolution with $WIND token.",
    images: ['/WIND24.jpg'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
