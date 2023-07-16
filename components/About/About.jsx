'use client'
import './about.css'
import img from '../../assets/img/about.jpg'
import founder from '../../assets/img/founder.jpg'
import Image from 'next/image'
import {MdGraphicEq} from 'react-icons/md'
import {BsCheckLg} from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-bg py-20'>
            <div className="max-w-7xl lg:space-x-7 items-center px-5 xl:px-16 mx-auto flex flex-col lg:flex-row">
                <div className="left w-full lg:w-[50%] flex flex-col  items-start">
                    <div className="relative">
                        <div className="max-w-[250px] absolute z-2 -top-14 -ml-10">
                            <div className="bg-white p-8 rounded shadow">
                                <h2 className='text-center text-3xl font-black'>45+</h2>
                                <p className='text-gray-600 font-bold text-center'>Years of experience</p>
                            </div>
                        </div>
                        <Image className='-z-10' src={img} alt="" />
                    </div>
                    <div className="flex mt-6 space-x-4 items-center">
                        <div className="px-5 py-5 bg-white rounded shadow ">
                            <h2 className="text-xl font-bold">Unique Ideas & Solutions</h2>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet, cons ctetur adipiscing facilisis.</p>
                        </div>
                        <div className="px-5 py-5 bg-white rounded shadow ">
                            <h2 className="text-xl font-bold">Create New Business</h2>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet, cons ctetur adipiscing facilisis.</p>
                        </div>
                    </div>
                </div>

                <div className="right w-full lg:w-[50%] ">
                    <h2 className='font-bold uppercase text-sm text-black'>About our company</h2>
                    <h2 className='text-4xl font-black my-5'>Get To Audience With Targeted Ads On Associative Media</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quibusdam doloremque necessitatibus ullam perspiciatis. Officiis, et earum tenetur eos hic deleniti magnam corrupti amet tempore provident natus quibusdam perferendis quaerat.</p>
                    <p className='text-gray-500 my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem est autem fugit sapiente minima aliquam!</p>
                   <div className="flex items-center space-x-16">
                    <div className="space-y-3">
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
                        <div className="space-y-3">
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
                   </div>

                   <div className="flex items-center space-x-4 mt-7">
                            <Image className='rounded-full' src={founder} alt="" />
                            <div className="">
                                <h2 className='font-bold'>Jhone Doe</h2>
                                <p className=' text-gray-500'>Founder Manager</p>
                            </div>
                   </div>
                </div>
            </div>

    </div>
  )
}

export default About