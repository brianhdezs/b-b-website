import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'BMASB Arquitectos | Despacho de Arquitectura',
  description:
    'Despacho de arquitectura contemporánea enfocado en proyectos residenciales, comerciales e interiores con rigor material y atemporalidad.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="antialiased font-sans">
      <body className="bg-stone-950 text-stone-100 flex flex-col min-h-screen selection:bg-stone-100 selection:text-stone-950 font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
