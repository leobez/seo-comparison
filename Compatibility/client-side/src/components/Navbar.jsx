import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className=" grid p-1 w-full place-items-center bg-white max-w-5xl text-sm lg:text-base">
            <ul className="flex text-slate-800 p-1 justify-between w-full gap-1">

                <li className='nav-item'>
                    <NavLink to="/"  
                        className={({isActive, isPending}) => 
                            isPending ? 'pending' : isActive ? 'active' : 'nav-hover'
                        }>
                        Home
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/web"  
                        className={({isActive, isPending}) => 
                            isPending ? 'pending' : isActive ? 'active' : 'nav-hover'
                        }>
                        Web
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/seo"  
                        className={({isActive, isPending}) => 
                            isPending ? 'pending' : isActive ? 'active' : 'nav-hover'
                        }>
                        Motor de busca
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/render"  
                        className={({isActive, isPending}) => 
                            isPending ? 'pending' : isActive ? 'active' : 'nav-hover'
                        }>
                        Renderização
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar