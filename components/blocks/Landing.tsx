import LandingImage from '../images/palette.webp'
import React from "react"
import Image from 'next/image'
const Landing = () => {
    return (
        <main className="flex flex-col justify-center items-center  ">

            <div className="flex flex-col justify-center  max-w-prose z-10  px-4">
                <h1 className="font-thin text-1xl sm:text-4xl">MAIKOL AGUILAR</h1>
                <h2 className="font-bold text-5xl sm:text-8xl">Designer</h2>
                <h2 className="font-bold text-5xl sm:text-8xl"><span className='text-green-600 dark:text-green-300'>+</span>Developer</h2>
            </div>
            <Image src={LandingImage} alt="" className=" md:absolute z-0 h-60 w-60 sm:h-96 sm:w-96 aspect-square right-0 top-44 subpixel-antialiased " />


        </main>
    )
}

export default Landing