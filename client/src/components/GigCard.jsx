import React from 'react'
import { image8 } from '../assets'
import { Link } from 'react-router-dom'
import { Star, HeartBroken } from '@mui/icons-material'

const GigCard = ({ card }) => {
    return (
        <Link to='/gig/4232' className='w-[24%] h-[300px] rounded-[4px] overflow-hidden ' >
            <div className="w-full h-full border-[1px] border-gray-200 mb-[25px] ">

                <div className="w-full h-[50%] ">
                    <img src={image8} alt=" " className='w-full h-full object-cover ' />
                </div>

                <div className="px-[10px] py-[8px] flex flex-col gap-[4px] ">
                    <div className="flex items-center gap-[10px] ">
                        <img src={card.pp} alt="" className='w-[32px] h-[32px] rounded-full ' />
                        <span>{card.username}</span>
                    </div>
                    <p className='text-[#111] ' >{card.description}</p>
                    <div className="flex items-center gap-[5px] ">
                        <Star />
                        <span className='text-[14px] font-bold text-yellow-500 ' >{card.star}</span>
                    </div>
                </div>

                <hr className='h-0 border-[1px] border-gray-200 ' />

                <div className="px-[10px] py-[8px] flex items-center justify-between ">
                    <HeartBroken />
                    <div className="flex items-center gap-[4px] ">
                        <span className='text-[#999] text-[12px] ' >STARTING AT</span>
                        <h2 className='text-[#555] font-medium ' >{card.price}</h2>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default GigCard