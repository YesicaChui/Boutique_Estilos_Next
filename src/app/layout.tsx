import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Boutique Estilos",
  description: "Tienda de Ropa de moda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
