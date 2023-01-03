import { SecodaryBtn } from "../buttons"
import React from "react"
import UseThemeBtn from "../useThemeBtn"
const Navbar = () => {
    return (
        <header className='sticky  top-0 z-20'>
            <nav className="flex  justify-between items-center px-12 py-4 bg-white/20 dark:bg-white/5 backdrop-blur-lg " >
                <div className="font-thin text-2xl">
                    Maikol
                </div>
                <div className=" gap-4 hidden md:flex">
                    <SecodaryBtn url="#proyect" buttonTitle={'proyects'}></SecodaryBtn>
                    <SecodaryBtn url="#about" buttonTitle={'about me'}></SecodaryBtn>
                    <SecodaryBtn url="#" buttonTitle={'education'}></SecodaryBtn>
                    <UseThemeBtn />
                </div>
            </nav>
        </header>

    )
}

export default Navbar