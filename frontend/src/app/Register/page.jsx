import Image from 'next/image';
import Link from 'next/link';

import profileImage from '../tabanghub3.png';

export default function Register(){

    return (
        <div className="justify-center px-6 py-12 lg:px-8">
            <div className='shadow-2xl px-11 pb-3 w-[300px] rounded-lg'>
                <Image className="mx-auto h-20 w-auto" src={profileImage} alt="Tabang Hub" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Register</h2>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" className="block text-sm font-medium leading-6 text-balance">Email address</label>
                            <div className="mt-2">
                                <input placeholder='Email' name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black-600 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6" style={{ paddingLeft: '12px' }}/>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm font-medium leading-6 text-black">Password</label>
                                
                            </div>
                            <div className="mt-2">
                                <input placeholder='Password' name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" style={{ paddingLeft: '12px' }}/>
                            </div>
                        </div>

                        <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Register</button>
                        </div>
                    </form>

                    <p className="mt-5 text-center text-sm text-gray-400">
                        have an account?
                        <Link href="/Login" className="font-semibold leading-6 text-red-500 hover:text-red-400"> Sign-in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}