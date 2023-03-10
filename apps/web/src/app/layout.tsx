// Global styles:
import './styles/globals.css';

// Font:
import { Roboto } from '@next/font/google';
const roboto = Roboto({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

// Global layout:
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
