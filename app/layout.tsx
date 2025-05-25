import './globals.css';

export const metadata = {
  title: 'evan.am',
  description: 'evan, offline editor in tokyo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
