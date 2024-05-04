import { useRef } from "react"

const Summary = ({items}) => {

    const mobileMenu = useRef()

    const openMenu = () => {

        if (mobileMenu.current.classList.contains('hidden')) {
            mobileMenu.current.classList.remove('hidden')
        } else {
            mobileMenu.current.classList.add('hidden')
        }

    }

    return (
        <>
            <div className="sm:hidden w-8 sticky left-0 top-0 h-[100vh] hover:bg-slate-600 cursor-pointer bg-slate-950 grid place-content-center gap-2 transition-all" onClick={openMenu}>
                <span className="bg-white h-3 w-3 rounded-full"/>
                <span className="bg-white h-3 w-3 rounded-full"/>
                <span className="bg-white h-3 w-3 rounded-full"/>
            </div>

            <div className='hidden w-56 sm:hidden fixed top-0 left-8 h-[100vh] border-r border-black p-4 bg-white z-20' ref={mobileMenu}>
                <div className='font-bold text-lg'>Sumário</div>
                <hr />
                <div>
                    <ul className='flex flex-col'>
                        {items && Object.entries(items).map((item) => (
                            <li key={item[0]} className='hover:bg-slate-300 h-10'>
                                <a href={`#${item[0]}`} className='h-full w-full flex items-center px-1'>
                                    {item[1]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='hidden sm:block sticky w-56 top-0 h-[100vh] border-r border-black p-4 '>
                <div className='font-bold text-lg'>Sumário</div>
                <hr />
                <div>
                    <ul className='flex flex-col'>
                        {items && Object.entries(items).map((item) => (
                            <li key={item[0]} className='hover:bg-slate-300 h-10'>
                                <a href={`#${item[0]}`} className='h-full w-full flex items-center px-1'>
                                    {item[1]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Summary