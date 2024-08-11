import './globals.css';
import localFont from 'next/font/local';

const mondwest = localFont({
  src: [
    {
      path: './fonts/PPMondwest-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-mondwest',
});

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
      <body className={mondwest.className}>{children}</body>
    </html>
  );
}
