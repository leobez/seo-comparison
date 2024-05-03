import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import Seo from './pages/Seo'
import Renderizacao from './pages/Renderizacao'
import Media from './pages/Media'
import Web from './pages/Web'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>

      <BrowserRouter>

        <header className="h-20 bg-slate-950 grid place-items-center lg:disabled">

          <div className="w-10/12 flex justify-between">

            <div className="flex flex-col gap-2">
              <p className="text-slate-200 text-xl font-bold">SSR e CSR</p>
              <p className=" text-slate-400">Este site é CSR</p>
            </div>

          </div>

        </header>

        <div className='w-full grid place-items-center bg-slate-200 h-14'>
          <Navbar/>
        </div>

        <div className="max-h-full w-full flex justify-center bg-slate-200 flex-1 min-h-0">
          <div className="max-w-5xl xl:min-w-[1024px] bg-white shadow-lg">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/web' element={<Web/>}></Route>
              <Route path='/seo' element={<Seo/>}></Route>
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
