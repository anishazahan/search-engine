'use client'

import React from 'react'
import './home.css'
import bannerImg from '../../assets/img/slider-search-1.png'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='banner-bg py-20'>
            <div className="max-w-7xl mx-auto px-5 lg:px-10 xl:px-16 flex justify-center lg:justify-between items-center flex-col lg:flex-row">

                <div className="left text-center lg:text-left space-y-10 w-full lg:w-[50%]">
                    <h2 className='text-5xl font-bold text-white'>Boost your site today</h2>
                    <p className='text-gray-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero doloribus quibusdam rem aliquam ut aspernatur magni repellendus officia beatae id!.lorem10Vero doloribus quibusdam rem aliquam ut aspernatur magni repellendus officia beatae id!.lorem10  </p>
                    <div className="">
                        <button className='px-8 py-3 font-bold bg-white rounded-md tracking-wider text-[17px]'>Purchase Now</button>
                    </div>
                </div>
                <div className="right w-full lg:w-[50%] flex justify-center">
                    <Image src={bannerImg} alt="" />
                </div>

            </div>

    </div>
  )
}

export default Banner