import React, { useState } from 'react'

const Header = () => {
  const [showSide, setShowSide] = useState(false)
  return (
    <div className='flex justify-between px-4 sm:px-16 h-20 items-center relative'>
        <div className='flex items-center text-sm font-semibold text-orange-900'><img src="/logo.png" alt="" width={50} height={50} className='rounded-full'/> QuizApp</div>
        <div  className={`sm:flex absolute sm:static top-0 ${showSide ? "right-1 bg-gray-200 p-4 duration-300 rounded-bl-lg" : "-right-20 duration-300" }`}  >
          <button onClick={()=>setShowSide(!showSide)} className={`px-4 py-2 border border-orange-900 text-orange-900 text-sm font-medium rounded-lg mb-4 sm:hidden`}>close</button>
            <ul className='flex flex-col sm:flex-row gap-4 sm:gap-16  text-orange-900 font-medium '>
                <li>Home</li>
                <li>Pricing</li>
                <li>About Us</li>
            </ul>
        </div>
        <div className='hidden sm:flex'>
            <button className='px-4 py-2 bg-orange-900 text-white text-sm font-medium rounded-lg'>Logout</button>
        </div>
        <div className='flex sm:hidden'>
          <img src="/images/hamburger.png" alt="" onClick={()=>setShowSide(!showSide)}/>
        </div>
    </div>
  )
}

export default Header;