import { Inter } from 'next/font/google';
const inter = Inter({ 'subsets': 'latin' });

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
