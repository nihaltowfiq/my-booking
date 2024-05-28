import type { Metadata } from 'next';
import './globals.css';
import { Murecho } from 'next/font/google';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'My Booking',
};

const font = Murecho({
  subsets: ['latin'],
  variable: '--font-murecho',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={font.className}>
      <body className="bg-primary-200">
        <nav className="fixed z-20 top-0 left-0 right-0 min-h-[4.25rem] bg-white border-b border-primary-200"></nav>
        <section className="container pt-[5.75rem] pb-[1.5rem]">
          <aside className="hidden lg:block fixed top-[5.75rem] h-[calc(100dvh-(4.25rem+3rem))] bg-white w-[15.5rem] overflow-y-auto p-[1.25rem] rounded-[0.5rem]"></aside>

          <main className="w-full pl-0 lg:pl-[17rem]">{children}</main>
        </section>
      </body>
    </html>
  );
}
