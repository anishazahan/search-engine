'use client'
import Image from 'next/image.js'
import {data} from './data.js'
console.log(data);
const TeamMember = () => {
  return (

    <>
             <div className="text-center flex justify-center items-center space-x-2">
            <div className="w-[2px] h-8 bg-blue-700"></div>
        <h2 className='fot-bold text-xl'>Our Team</h2>
        </div>
        <h2 className="text-3xl font-extrabold text-center mt-6">We Are Ready To Serving</h2>
   
    <div className='max-w-6xl mx-auto px-5 mt-10 mb-24 xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
       
        {
            data.map((item,index)=>{
             return  <div key={index} className="border shadow">
                    <Image src={item.img} alt="" />
                    <div className="p-7">
                        <h2 className='font-bold'>{item.name}</h2>
                        <h2 className='font-bold text-gray-500 mt-2'>{item.title}</h2>
                    </div>
                </div>
            })
        }
    </div>

    </>
  )
}

export default TeamMember