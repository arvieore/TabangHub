import Image from 'next/image';
import Navbar from '../Dashboard/components/Navbar';

export default function CardDetails() {
    return (
        <>
            <Navbar />
            <div className="rounded-tl-[4rem] rounded-br-[4rem] bg-white mt-12 h-auto p-8 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold mb-4">
                        Empowering <span className="text-[#00df9a]">Community</span> Impact.
                    </h1>
                    <p className="mb-6 max-w-[1000px]">
                        Be a catalyst for change. Your skills are needed to make this event a success. Join us and leave a lasting impact on our community. Your contribution will help create positive change and strengthen our community bonds. Together, we can make a difference.</p>
                    <div className="flex space-x-4">
                        <button className="bg-[#00df9a] text-white font-semibold py-2 px-4 rounded hover:bg-[#33f2b7]">
                            About this Org.
                        </button>
                        <button className="border border-[#33f2b7] text-[#00df9a] font-semibold py-2 px-4 rounded hover:bg-[#33f2b7] hover:text-white">
                            View Event
                        </button>
                    </div>
                </div>
                <div className="mx-auto md:mt-0 ml-auto hidden md:block">
                    <img
                        src="tabanghub3.png"
                        alt="Tabang Hub"
                        className="h-32 w-auto md:h-48 lg:h-64 xl:h-80"
                    />
                </div>
            </div>
        </>
    );
}
