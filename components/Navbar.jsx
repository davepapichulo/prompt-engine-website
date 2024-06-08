"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const isUserLoginIn = true;
const Navbar = () => {
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
          </div>
        ) : (
          <>

          </>
        )
      }

      </div>
   </nav>
  )
}

export default Navbar