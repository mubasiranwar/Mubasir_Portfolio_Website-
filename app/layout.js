import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Mubasir Anwar | Full-Stack AI Engineer',
  description: 'Explore Mubasir Anwar\'s AI applications, full-stack software projects, intelligent automation workflows, and applied research.',
  openGraph: {
    title: 'Mubasir Anwar | Full-Stack AI Engineer',
    description: 'Explore Mubasir Anwar\'s AI applications, full-stack software projects, intelligent automation workflows, and applied research.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0A0F1E] text-[#F3F4F6] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
