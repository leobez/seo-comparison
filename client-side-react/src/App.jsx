import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-full flex flex-col">

      <BrowserRouter>

        <header className="flex-none h-20 bg-slate-950 grid place-items-center">

          <div className="w-10/12 flex justify-between">

            <div className="flex flex-col gap-2">
              <p className="text-slate-200 text-xl font-bold">SSR e CSR</p>
              <p className=" text-slate-400">Este site é CSR</p>
            </div>

            <nav className="border-2 border-slate-200 grid p-1">
              <ul className="flex text-slate-200 p-1">
                <li className="nav-item"><Link href="/">Home</Link></li>
                <li className="nav-item"><Link href="/page1">Page1</Link></li>
                <li className="nav-item"><Link href="/page2">Page2</Link></li>
                <li className="nav-item"><Link href="/page3">Page3</Link></li>
                <li className="nav-item"><Link href="/page4">Page4</Link></li>
              </ul>
            </nav>

          </div>

        </header>

        <div className="max-h-full flex-grow w-full flex justify-center bg-slate-200">
          <div className="max-w-6xl min-w-[1152px] bg-white p-4 shadow-lg">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/page1' element={<Page1/>}></Route>
              <Route path='/page2' element={<Page2/>}></Route>
              <Route path='/page3' element={<Page3/>}></Route>
              <Route path='/page4' element={<Page4/>}></Route>
            </Routes>
          </div>
        </div>
      
      </BrowserRouter>

      <footer className="flex-none h-20 bg-slate-950 grid place-items-center">

        <div className="w-10/12 flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-slate-200 text-xl font-bold">SSR e CSR</p>
            <p className=" text-slate-400">Este site é CSR</p>
          </div>

          <div className="grid place-items-center">
            <p className="text-slate-200 font-bold">Leonardo de Souza Bezerra</p>
          </div>
        </div>

      </footer>

    </div>
  )
}

export default App
