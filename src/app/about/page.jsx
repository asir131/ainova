import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center  py-25 md:py-50 bg-gradient-to-r from-[#CEE1FF] via-white to-[#CEE1FF]' >
      <div className='w-15'>
        <Image src="/ai.png" width={100} height={100} alt='' />
      </div>
      <div className='text-center'>
            <h1 className='font-semibold text-xl text-[#121D2E] mt-13'>Ready to Experience AI Booking?</h1>
            <p className='text-[#121D2E] opacity-60 py-6'>Join thousands of users who are already saving time with our intelligent platform</p>
      </div>
      <div className="flex mt-5 flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="px-8 py-4 max-sm:w-full border-2 border-purple-600 text-purple-600 font-semibold h-[58px] w-[180px] rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Contract Us
              </Link>
              <button className="px-8 py-4 max-sm:w-full bg-gradient-to-r from-[#5E8CFF] via-[#7B81FF] to-[#C78EFF] text-white font-semibold rounded-lg h-[58px] w-[180px] transition-all duration-300 shadow-lg hover:shadow-xl">
                FAQ
              </button>
              
            </div>
    </div>
  )
}

export default page
