'use client'
import Image from 'next/image'
import graphImg from '../../assets/img/gharp.jpg'
import { BsCheckLg } from 'react-icons/bs';

const Graph = () => {
  return (
    <div className="max-w-6xl px-5 xl:px-0 mx-auto flex flex-col-reverse justify-between items-center py-24 lg:flex-row">


<div className="left w-full lg:w-[50%]">
    <h2 className='text-3xl font-bold mt-10 lg:mt-0'>For All Your SEO And Online <span className='text-[#01BBEA]'>Marketing Needs</span> </h2>
    <p className='text-sm font-medium text-gray-500 my-7 leading-7'>Rimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley scrambled. Lorem Ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley scrambled.</p>
    <div className=" space-y-5">
        <div className="flex space-x-3 items-center">
            <button className='p-1 text-white rounded-full bg-[#01BBEA]'><BsCheckLg></BsCheckLg></button>
            <p className='text-gray-500 font-semibold text-sm'>Responsive Website Design</p>
        </div>
        <div className="flex space-x-3 items-center">
            <button className='p-1 text-white rounded-full bg-[#01BBEA]'><BsCheckLg></BsCheckLg></button>
            <p className='text-gray-500 font-semibold text-sm'>Reputation Management</p>
        </div>
        <div className="flex space-x-3 items-center">
            <button className='p-1 text-white rounded-full bg-[#01BBEA]'><BsCheckLg></BsCheckLg></button>
            <p className='text-gray-500 font-semibold text-sm'>Website Speed Optimization</p>
        </div>
        <div className="flex space-x-3 items-center">
            <button className='p-1 text-white rounded-full bg-[#01BBEA]'><BsCheckLg></BsCheckLg></button>
            <p className='text-gray-500 font-semibold text-sm'>Responsive Website Design</p>
        </div>
    </div>
    <div className="mt-10">
        <button className='px-8 py-3 font-bold tracking-wider rounded-sm hover:bg-[#01BBEA] border-2 border-[#01BBEA]'>SignUp Today</button>
    </div>
</div>
<div className="left w-full lg:w-[50%] flex lg:justify-end">
    <Image src={graphImg} alt="" />
</div>

    </div>
  )
}

export default Graph