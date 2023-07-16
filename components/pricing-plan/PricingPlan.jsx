'use client'
import {data} from './data.js'
import {MdGraphicEq} from 'react-icons/md'
import {BsCheckLg} from 'react-icons/bs'
const PricingPlan = () => {

 
  return (
    <>

        <div className="max-w-6xl px-5 xl:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {
                data.map((item,index)=>{
                    return <div key={index} className="">
                        <div className="mx-auto -mb-8  flex justify-center">
                            <button className='p-3 text-3xl text-white ring-8 ring-white bg-[#01BBEA] rounded-full mx-auto '><MdGraphicEq></MdGraphicEq></button>
                        </div>


                           <div className="border">
                           <div className="text-center py-7 bg-blue-100">
                                <h2 className='text-sm uppercase font-bold mt-6 mb-6'>{item.name}</h2>
                                <h2 className='text-3xl font-semibold mt-3 mb-8'> $ <span className='text-[#01BBEA] font-black'>{item.price}</span> <span className='text-sm font-medium text-gray-600'>/ month</span> </h2>
                            </div>

                            <div className="space-y-4 pl-7 pt-8 text-center">
                            <div className="flex space-x-3 items-center">
                                <button className='p-[2px] text-white rounded-full bg-[#01BBEA]'><BsCheckLg></BsCheckLg></button>
                                <p className='text-gray-500 font-semibold text-sm'>150 keypresses optimization</p>
                            </div>
                            <div className="flex space-x-3 items-center">
                                <button className='p-[2px] text-white rounded-full bg-[#01BBEA]'><BsCheckLg></BsCheckLg></button>
                                <p className='text-gray-500 font-semibold text-sm'>150 keypresses optimization</p>
                            </div>
                            <div className="flex space-x-3 items-center">
                                <button className='p-[2px] text-white rounded-full bg-[#01BBEA]'><BsCheckLg></BsCheckLg></button>
                                <p className='text-gray-500 font-semibold text-sm'>150 keypresses optimization</p>
                            </div>
                            <div className="flex space-x-3 items-center">
                                <button className='p-[2px] text-white rounded-full bg-[#01BBEA]'><BsCheckLg></BsCheckLg></button>
                                <p className='text-gray-500 font-semibold text-sm'>150 keypresses optimization</p>
                            </div>
                            <div className="flex space-x-3 items-center">
                                <button className='p-[2px] text-white rounded-full bg-[#01BBEA]'><BsCheckLg></BsCheckLg></button>
                                <p className='text-gray-500 font-semibold text-sm'>150 keypresses optimization</p>
                            </div>
                            <div className="flex space-x-3 items-center">
                                <button className='p-[2px] text-white rounded-full bg-[#01BBEA]'><BsCheckLg></BsCheckLg></button>
                                <p className='text-gray-500 font-semibold text-sm'>150 keypresses optimization</p>
                            </div>
                            </div>

                            <div className="pl-7 my-10">
                                <button className='bg-[#01BBEA] px-10 py-3 text-white hover:bg-black font-bold tracking-wider'>Customize My plan</button>
                            </div>
                           </div>
                    </div>
                })
            }
        </div>

    </>
  )
}

export default PricingPlan