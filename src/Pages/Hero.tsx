import React from 'react'
import UserIcons from '../components/userIcons'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row px-8 sm:px-20 items-center '>
        <div className='w-full sm:w-[40%]'>
            <h1 className='text-orange-900 text-3xl sm:text-5xl font-bold tracking-wider leading-tight'>Master your Skills with quizApp</h1>
            <span className='text-xs'>Are you tired of all-nighters and still struggling to keep with your coursework?</span>

            <div className='flex flex-col  sm:flex-row gap-8 sm:gap-16 pt-8 sm:pl-10'>
                <button className='px-4 py-2 rounded-3xl bg-orange-900 text-white m'>Get Started</button>
                <div className='flex '>
                <UserIcons/>
                <div className='pl-28'>
                <p className='text-xs font-semibold text-orange-900'>
                42k + 
                </p> 
                <span className='text-xs font-semibold text-orange-900'>Using this app</span>
                </div>
                
                </div>
            </div>
        </div>
        <div className='w-full sm:w-[60%]'>
            <img src="/images/hero.jpg" alt="" className='object-cover '/>
        </div>
    </div>
  )
}

export default Hero