"use client"
import Image from 'next/image'
import {data} from './data.js'

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 xl:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            data.map((item,index)=>{
                return <div key='index' className="border shadow">
                        <Image className='w-full' src={item.img} alt="" />
                        <h2 className='text-xl font-bold text-black p-4'>{item.name}</h2>
                        <p className='pl-4 text-gray-500 font-medium pb-5'>{item.description}</p>

                        <div className="pb-8 pl-4">
                            <button className='font-semibold tracking-wider text-white px-8 py-3 rounded bg-[#01BBEA]'>Learn More</button>
                        </div>
                </div>
            })
          }
        </div>

    </div>
  )
}

export default Services