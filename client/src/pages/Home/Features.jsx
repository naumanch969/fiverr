import { Check } from '@mui/icons-material'
import React from 'react'

const Features = () => {
    return (
        <div className='bg-[#f1fdf7] flex justify-center py-[100px]  ' >
            <div className="flex max-w-[1100px] w-full gap-[72px] ">

                <div className="flex-[4] flex flex-col gap-[15px] ">
                    <h1 className='text-[28px] font-medium ' >A whole world of freelance talent at your fingerips</h1>
                    <div>
                        <div className="font-medium flex items-center gap-[5px] ">
                            <Check style={{fontSize:'18px'}} />
                            <span className='text-[16px]' >The best for every budget</span>
                        </div>
                        <p className='text-[15px] font-light text-gray-500 leading-[20px] tracking-[1px] ' >Find high-quality services at every price point. No houly rates, just project-based pricing.</p>
                    </div>
                    <div>
                        <div className="font-medium flex items-center gap-[5px] ">
                            <Check style={{fontSize:'18px'}} />
                            <span className='text-[16px]' >The best for every budget</span>
                        </div>
                        <p className='text-[15px] font-light text-gray-500 leading-[20px] tracking-[1px] ' >Find high-quality services at every price point. No houly rates, just project-based pricing.</p>
                    </div>
                    <div>
                        <div className="font-medium flex items-center gap-[5px] ">
                            <Check style={{fontSize:'18px'}} />
                            <span className='text-[16px]' >The best for every budget</span>
                        </div>
                        <p className='text-[15px] font-light text-gray-500 leading-[20px] tracking-[1px] ' >Find high-quality services at every price point. No houly rates, just project-based pricing.</p>
                    </div>
                </div>

                <div className="flex-[5] ">
                    <video src="" controls className='w-[720] w-full  ' />
                </div>

            </div>
        </div>
    )
}

export default Features