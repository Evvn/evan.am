import './globals.css';
// import { VT323 } from 'next/font/google';

// const vt323 = VT323({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'evan.am',
  description: 'evan evan evan evan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* <body className={vt323.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
