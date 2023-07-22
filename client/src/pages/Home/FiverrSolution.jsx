import React from 'react'
import { image1 } from '../../assets'
import { Check } from '@mui/icons-material'

const FiverrSolution = () => {
    return (
        <div className='bg-[#0d084d] text-white flex justify-center py-[100px]  ' >
            <div className="flex max-w-[1100px] w-full gap-[72px] ">

                <div className="flex-[4] flex flex-col gap-[15px] ">
                    <h1 className='text-[40px] font-bold ' >fiverr business</h1>
                    <h2 className='text-[20px] font-medium ' >A business solution designed for teams</h2>
                    <p className='font-[400] text-[1rem] ' >Upgrade to a curated experience packed with tools and benefits, dedicated to sucsess</p>
                    <div className="mt-[10px] flex flex-col gap-[15px] ">
                        <div className="flex items-center gap-[5px] font-light text-[14px] ">
                            <Check style={{ fontSize: '18px' }} />
                            <p>Connect to feelancers with proven business experience</p>
                        </div>
                        <div className="flex items-center gap-[5px] font-light text-[14px] ">
                            <Check style={{ fontSize: '18px' }} />
                            <p>Get matched with the perfect talent by a customer success manager</p>
                        </div>
                        <div className="flex items-center gap-[5px] font-light text-[14px] ">
                            <Check style={{ fontSize: '18px' }} />
                            <p>Manage teamwork and bost productivity with one powerful workspace</p>
                        </div>
                    </div>
                    <button className='bg-light-green text-white px-[20px] py-[10px] rounded-[5px] text-[1rem] cursor-pointer w-max mt-[20px] border-none  ' >Explore Fiverr Business</button>
                </div>

                <div className="flex-[5] ">
                    <img src={image1} controls className=' w-full rounded-[4px] ' />
                </div>

            </div>
        </div>
    )
}

export default FiverrSolution