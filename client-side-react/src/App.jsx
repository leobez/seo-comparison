import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import SEO from './pages/SEO'
import Renderizacao from './pages/Renderizacao'
import Media from './pages/Media'
import Web from './pages/Web'

function App() {

  return (
    <div>

      <BrowserRouter>

        <header className="h-20 bg-slate-950 grid place-items-center">

          <div className="w-10/12 flex justify-between">

            <div className="flex flex-col gap-2">
              <p className="text-slate-200 text-xl font-bold">SSR e CSR</p>
              <p className=" text-slate-400">Este site é CSR</p>
            </div>

            <nav className="border-2 border-slate-200 grid p-1">
              <ul className="flex text-slate-200 p-1">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/web">Web</Link></li>
                <li className="nav-item"><Link to="/seo">SEO</Link></li>
                <li className="nav-item"><Link to="/render">Renderização</Link></li>
                <li className="nav-item"><Link to="/media">Mídia</Link></li>
              </ul>
            </nav>

          </div>

        </header>

        <div className="max-h-full w-full flex justify-center bg-slate-200">
          <div className="max-w-4xl xl:min-w-[896px] bg-white p-4 shadow-lg">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/web' element={<Web/>}></Route>
              <Route path='/seo' element={<SEO/>}></Route>
              <Route path='/render' element={<Renderizacao/>}></Route>
              <Route path='/media' element={<Media/>}></Route>
              <Route path='*' element={<Page404/>}></Route>
            </Routes>
          </div>
        </div>
      
      </BrowserRouter>

      <footer className="h-20 bg-slate-950 grid place-items-center">

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
