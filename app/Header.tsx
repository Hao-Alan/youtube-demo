import Link from 'next/link'
import React from 'react'



function Header() {
  return (
    <header className='bg-blue-300 text-white text-2xl  py-5 px-5'>
    <Link href={"/"} className="cursor-pointer bg-gray-500 px-3 py-2 rounded-md hover:bg-gray-300">Home</Link>
    </header>
  )
}

export default Header