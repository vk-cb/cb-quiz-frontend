import React from 'react'

const UserIcons = () => {
  return (
    <div className=' absolute'>

    
    <div className='border w-[40px] h-[40px] rounded-full flex justify-center items-center bg-sky-200 hover:bg-sky-400 cursor-pointer overflow-hidden'>
        <img src="/images/usersIcons/boy.png" alt="" width={35} height={35} />
    </div>
    
    <div className='bg-yellow-200 border w-[40px] h-[40px] rounded-full flex justify-center items-center relative -top-[40px] -right-[33px] hover:bg-yellow-400 cursor-pointer overflow-hidden'>
        <img src="/images/usersIcons/groom.png" alt="" width={35} height={35} />
    </div>
    
    <div className='bg-purple-200 border w-[40px] h-[40px] rounded-full flex justify-center items-center relative -top-[80px] -right-[66px] hover:bg-purple-300 cursor-pointer overflow-hidden'>
        <img src="/images/usersIcons/guest.png" alt="" width={35} height={35} />
    </div>
    </div>
  )
}

export default UserIcons