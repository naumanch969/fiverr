import React from 'react'

const TrustedBy = () => {
    return (
        <div className='bg-gray-100 h-[100px] flex justify-center ' >
            <div className="w-[900px] flex items-center justify-center gap-[20px] text-gray-800 font-medium ">


            <span className='text-[20px]' >Trusted by:</span>

            <span className='text-[36px] text-gray-400 ' >Facebook</span>
            <span className='text-[36px] text-gray-400 ' >Google</span>
            <span className='text-[36px] text-gray-400 ' >Netflix</span>
            <span className='text-[36px] text-gray-400 ' >P&G</span>
            <span className='text-[36px] text-gray-400 ' >PayPal</span>

            </div>
        </div>
    )
}

export default TrustedBy