"use client";

import { ReactTyped } from "react-typed";

export default function Hero(){
    
    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold p-2">ENHANCING COMMUNITY IMPACT</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Empower Communities.</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-4xl sm:text-3xl text-xl font-bold py-2">Streamlined Matching for</p>
                    <ReactTyped className="md:text-4xl sm:text-3xl text-xl font-bold text-gray-500 pl-2"
                        strings={['VOLUNTEERS', 'ORGANIZATIONS']} 
                        typeSpeed={120}
                        backSpeed={130}
                        loop
                    />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">
                Leverage our platform to connect skills with community needs.
                </p>
                <button className="bg-[#00df9a] w-[200px] rounded-md my-4 py-1 mx-auto hover:bg-[#33f2b7]">Get Started</button>
            </div>
        </div>
    );
}