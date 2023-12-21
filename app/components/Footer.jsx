import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full bg-gray-800 text-white'>
      <div className='container mx-auto px-8 py-6 border-t-2 border-solid border-black flex justify-between items-center'>
        <div className='flex flex-col lg:py-2 items-left'>
          <h2 className='font-bold mb-2'>Site Links </h2>
          <Link href='/'>Home</Link>
          <Link href='/About'>About</Link>
          <Link href='/Art'>Articles</Link>
          <Link href='/Projects'>Projects</Link>
        </div>
        <div className='flex flex-col text-sm'>
          <span className='block font-bold'>Contact Information</span>
          <span className='block py-2'>Phone: 0563882619</span>
          <span className='block'>Address: UAE, Dubai</span>
        </div>
        <span className='text-sm'>&copy; {new Date().getFullYear()} All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
