import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Vitals Testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">

      <body className={inter.className}>

        <div className='flex flex-col min-h-screen'>

          {/* HEADER */}
          <header className="h-20 bg-slate-950 grid place-items-center ">
            <div className="w-10/12 flex justify-between ">

              <div className="flex flex-col gap-2">
                <p className="text-slate-200 text-xl font-bold">SSR e CSR - Web Vitals</p>
                <p className=" text-slate-400">Este site é SSR</p>
              </div>

            </div>
          </header>

          {/* MAIN */}
          <div className="max-h-full w-full flex justify-center bg-slate-200 flex-1 min-h-0">
            <div className="max-w-5xl w-full bg-white shadow-lg ">
              {children}
            </div>
          </div>

          {/* FOOTER */}
          <footer className="h-20 bg-slate-950 flex items-center p-4">
            <p className="text-slate-200 font-bold">Leonardo de Souza Bezerra</p>
          </footer>

        </div>

      </body>

    </html>
  );
}
