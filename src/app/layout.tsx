import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ShareTrip - Frontend Task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#EBF0F5]">
        <nav className="fixed top-0 left-0 right-0 min-h-[4.25rem] bg-white border-b border-[#EBF0F5]"></nav>
        <section className="container pt-[5.75rem] pb-[1.5rem]">
          <aside className="fixed top-[5.75rem] h-[calc(100dvh-(4.25rem+3rem))] bg-white w-[15.5rem] overflow-y-auto p-[1.25rem] rounded-[0.5rem]">
            sfasdfasd asdfads afafdadsfa sfasdfasd asdfads afafdadsfa sfasdfasd
            asdfads afafdadsfa
          </aside>

          <main className="w-full pl-[17rem]">{children}</main>
        </section>
      </body>
    </html>
  );
}
