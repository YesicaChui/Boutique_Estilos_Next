import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Boutique Estilos',
  description: 'Tienda de Ropa de moda',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-gray-100'>
        <Header />
        {children}
      </body>
    </html>
  );
}
