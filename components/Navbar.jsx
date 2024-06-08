"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';


const Navbar = () => {

  const isUserLoginIn = true;
  const [providers, setProviders] = useState(null);
  useEffect(() => {
      const setProviders = async () => {
        const response = await getProviders();

        setProviders(response);
      }
  }, [ ])
const [ToggleDropDown, setToggleDropDown] = useState(false);

  
  return (
   <nav className='flex-between w-full mb-16 pt-5'>
      <Link href ='/' className='flex items-center gap-2'>
        <Image src= '/assets/images/logo.svg' alt='logo' height={35} width= {35} className='object-contain'/>
        <p className='logo_text'> PromptEngine </p>
      </Link>
      <div className='sm:flex hidden' >
        {isUserLoginIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
                Create Prompt
            </Link>
            <button type='button' onClick={signOut} className='outline_btn'>
                Sign Out
            </button>
            <Link href='/profile' className='items-center'>
              <Image src='/assets/images/logo.svg' height={40} width={40} alt='profile' className='rounded-full'>

              </Image>
            </Link>
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((providers) => (
              <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='black_btn'>
                Sign In
              </button>
            ))}
          </>
        )
      }
      </div>

      <div className='sm:hidden flex relative'>
        {isUserLoginIn ? (
          <div>
            <Image src= '/assets/images/logo.svg' alt='logo' height={35} width= {35} className='object-contain' 
            onClick={() => setToggleDropDown((prev)=> !prev )}/>

            {ToggleDropDown && (
              <div className='dropdown'>
                  <Link href='/profile' className='dropdown_link' onClick={()=>setToggleDropDown(false)}>
                    My Profile
                  </Link>
                  <Link href='/create-prompt' className='dropdown_link' onClick={()=>setToggleDropDown(false)}>
                    Create Prompt
                  </Link>
                  <button type='button' onClick = {() => { setToggleDropDown(false); signOut()}} className='mt-5 w-full black_btn'>
                      Sign Out
                  </button>
              </div>
              
            )}
          </div>
        ):(
          <>
            {providers && Object.values(providers).map((providers) => (
              <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='black_btn'>
                Sign In
              </button>
              
            ))}
          </>
        )}

      </div>


   </nav>
  )
}

export default Navbar