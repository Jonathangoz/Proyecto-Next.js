import { Metadata } from 'next';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/Fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard',
    default: 'Dashboard | Next.js App',
  },
  description: 'A simple dashboard built with Next.js',
  metadataBase: new URL('https://nextjs-dashboard.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
