import { SvgIcon } from '@mui/material';
import Link from 'next/link';

export default function Cards(){

    return(
        <div className="py-12 h-fit bg-gray-100 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center m-3">

                <div className="bg-white shadow-lg rounded-lg max-w-sm transform transition-transform duration-300 hover:scale-105">
                    <img className="object-cover w-full rounded-t-lg" src='./Cleaning.jpg'></img>
                    <div className="px-3 py-6 text-justify">
                        <h2 className="text-2xl font-semibold mb-2">Clean with us.</h2>
                        <p className="text-gray-700">Join our Clean with Us campaign to help keep our environment pristine. Participate in local cleanup events and contribute to a healthier, cleaner community for everyone.</p>
                        <div className='mt-3'>
                            <Link className='bg-[#00df9a] hover:bg-[#33f2b7] w-[100px] rounded-md p-2 text-sm cursor-pointer' href='/Details'>View Details</Link>
                        </div>
                    </div>
                </div>  
        
                <div className="bg-white shadow-lg rounded-lg max-w-sm transform transition-transform duration-300 hover:scale-105">
                    <img className="object-cover w-full rounded-t-lg" src='Donation.jpg'></img>
                    <div className="px-3 py-6">
                        <h2 className="font-semibold text-2xl">Donation.</h2>
                        <p className="text-gray-700">Support those in need by contributing to our donation program. Your generous gifts help provide essential resources and improve the lives of individuals and families in our community.</p>
                        <div className='mt-3'>
                            <Link className='bg-[#00df9a] hover:bg-[#33f2b7] w-[100px] rounded-md p-2 text-sm cursor-pointer' href='/Details'>View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg max-w-sm transform transition-transform duration-300 hover:scale-105">
                    <img className="object-cover w-full rounded-t-lg" src='Planting.jpg'></img>
                    <div className="px-3 py-6">
                        <h2 className="font-semibold text-2xl">Plant for our mother earth.</h2>
                        <p className="text-gray-700">Be a part of our Plant for Our Mother Earth initiative by planting trees and greenery. Your efforts will help combat climate change, enhance biodiversity, and create a more sustainable future for our planet.</p>
                        <div className='mt-3'>
                            <Link className='bg-[#00df9a] hover:bg-[#33f2b7] w-[100px] rounded-md p-2 text-sm cursor-pointer' href='/Details'>View Details</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}