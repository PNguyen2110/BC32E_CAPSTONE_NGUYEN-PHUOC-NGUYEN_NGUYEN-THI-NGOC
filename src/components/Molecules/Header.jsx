import React from 'react'
import { NavLink } from 'react-router-dom'


export const Header = () => {
    return (
        <header className="p-4 bg-black bg-opacity-40  text-white fixed w-full z-10 header">
            <div className="container flex justify-between h-16 mx-auto">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                   
                    <img src="	https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="cyberlearn.vn" />
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                   
                    <li className="flex">
                        <NavLink className="flex items-center px-4 -mb-1 text-white  " to="/home"  >Home</NavLink>
                       
                    </li>
                    <li className="flex">
                       
                        <NavLink  className="flex items-center px-4 -mb-1   text-white  " to="/news" >News</NavLink>
                    </li>
                    <li className="flex">
                    <NavLink  className="flex items-center px-4 -mb-1   text-white  " to="/contact" >Contact</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 ">
                        <NavLink to="login" className="text-white">Sign in</NavLink>
                    </button>
                    <button className="self-center px-8 py-3  ">
                        <NavLink to="register" className="text-white">Sign up</NavLink>
                    </button>
                </div>
               
            </div>
        </header>


    )
}

export default Header

