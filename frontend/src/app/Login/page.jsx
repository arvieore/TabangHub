import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import profileImage from '../tabanghub3.png';

export default function Login(){

    return(
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className='mx-auto shadow-2xl px-11 pb-3 w-[300px] border border-gray-700 rounded-lg bg-[#161b22]'>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image className="mx-auto h-20 w-auto" src='/White-TabangHub3.png' alt="Tabang Hub" width={100} height={100} />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500 text-gray-100">Sign in to continue</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label for="email" className="block text-sm font-medium leading-6 text-balance text-gray-100">Email address</label>
                <div className="mt-2">
                  <input placeholder='Email' name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6" style={{ paddingLeft: '12px' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label for="password" className="block text-sm font-medium leading-6 text-gray-100">Password</label>
                  
                </div>
                <div className="mt-2">
                  <input placeholder='Password' name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" style={{ paddingLeft: '12px' }} />
                </div>
              </div>

              <div>
                <Link href='/Dashboard' className="flex w-full justify-center rounded-md bg-[#00df9a] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#33f2b7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign-in</Link>
              </div>
            </form>
            <div className="text-sm mt-3">
                    <a href="#" className="font-semibold text-[#00df9a] hover:text-[#33f2b7]">Forgot password?</a>
                  </div>
            <p className="mt-5 text-center text-sm text-gray-400">
              Dont have an account?
              <Link href="/Register" className="font-semibold leading-6 text-[#00df9a] hover:text-[#33f2b7]"> Register</Link>
            </p>
          </div>
        </div>
      </div>

    );
}