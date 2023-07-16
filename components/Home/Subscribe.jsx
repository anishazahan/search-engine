'use client'

const Subscribe = () => {
  return (
    <div className="bg-blue-100 py-24">
          <div className="px-5">
          <h2 className="text-3xl font-bold text-center">Check Your Website’s SEO Score For Free!</h2>
          <p className="text-sm font-medium text-gray-500 text-center mt-6 mb-3 ">Provide us with the following information and we  will email you the SEO score of your website</p>

          <div className="form flex flex-col lg:flex-row space-y-4 lg:space-y-0 md:space-x-3 max-w-5xl py-8 mx-auto justify-center items-center">
            <input className="border-2 rounded py-3 px-5 outline-none lg:w-full w-full md:w-[70%]  placeholder-slate-600 placeholder-semibold text-sm text-black font-medium" placeholder="Your Name" type="text" />
            <input className="border-2 rounded py-3 px-5 outline-none lg:w-full w-full md:w-[70%] mx-auto placeholder-slate-600 placeholder-semibold text-sm text-black font-medium" placeholder="Your Email" type="email" />

            <div className="">
            <button className='font-semibold tracking-wider text-white px-8 py-3 rounded bg-[#01BBEA]'>Submit</button>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Subscribe