import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "serve-side",
  description: "Server side app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      
      <head>
        <meta name="google-site-verification" content="OZ_8GmRPdlC0VzQJPch6pSqakXaLHa0xSBM6lQUffBg" />
      </head>

      <body className={inter.className}>

        <div className="h-full flex flex-col">

          <header className="flex-none h-20 bg-slate-950 grid place-items-center">

            <div className="w-10/12 flex justify-between">

              <div className="flex flex-col gap-2">
                <p className="text-slate-200 text-xl font-bold">SSR e CSR</p>
                <p className=" text-slate-400">Este site é SSR</p>
              </div>

              <nav className="border-2 border-slate-200 grid p-1">
                <ul className="flex text-slate-200 p-1">
                  <li className="nav-item"><a href="/">Home</a></li>
                  <li className="nav-item"><a href="/page1">Page1</a></li>
                  <li className="nav-item"><a href="/page2">Page2</a></li>
                  <li className="nav-item"><a href="/page3">Page3</a></li>
                  <li className="nav-item"><a href="/page4">Page4</a></li>
                </ul>
              </nav>

            </div>

          </header>

          <div className="max-h-full flex-grow w-full flex justify-center bg-slate-200">
            <div className="max-w-6xl min-w-[1152px] bg-white p-4 shadow-lg">
              {children}
            </div>
          </div>

          <footer className="flex-none h-20 bg-slate-950 grid place-items-center">

            <div className="w-10/12 flex justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-slate-200 text-xl font-bold">SSR e CSR</p>
                <p className=" text-slate-400">Este site é SSR</p>
              </div>

              <div className="grid place-items-center">
                <p className="text-slate-200 font-bold">Leonardo de Souza Bezerra</p>
              </div>
            </div>

          </footer>

        </div>

      </body>

    </html>
  );
}
