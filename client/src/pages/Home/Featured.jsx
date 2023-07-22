import React from 'react'
import { Search } from '@mui/icons-material'
import { image4 } from '../../assets'

const Featured = () => {
    return (
        <div className='h-[600px] flex justify-center bg-dark-green text-white ' >
            <div className="max-w-[1100px] w-full flex items-center gap-[5rem] ">

                <div className="flex-[3] flex flex-col gap-[30px] ">
                    <h1 className='text-[40px] font-extrabold ' >Find the perfect  <i className='font-light ' >freelance</i>  services for your business</h1>
                    <div className="flex items-center justify-between h-[50px] bg-white rounded-[5px] overflow-hidden ">
                        <div className="flex-[10] flex items-center gap-[10px] h-full ">
                            <Search className='flex-[1] text-[20px] text-gray-300 ' />
                            <input type="text" placeholder='Try "building mobile app" ' className='flex-[11] h-full text-gray-500 border-none outline-none ' />
                        </div>
                        <button className='flex-[2] h-[50px] bg-light-green border-none text-white cursor-pointer text-[20px] ' >Search</button>
                    </div>
                    <div className="flex items-center gap-[10px] h-full ">
                        <span>Popular:</span>
                        <button className='text-white bg-trasparent border-[1px] border-white rounded-[20px] px-[10px] py-[5px] text-[14px] cursor-pointer  ' >Web Design</button>
                        <button className='text-white bg-trasparent border-[1px] border-white rounded-[20px] px-[10px] py-[5px] text-[14px] cursor-pointer  ' >Wordpress</button>
                        <button className='text-white bg-trasparent border-[1px] border-white rounded-[20px] px-[10px] py-[5px] text-[14px] cursor-pointer  ' >Logo Design</button>
                        <button className='text-white bg-trasparent border-[1px] border-white rounded-[20px] px-[10px] py-[5px] text-[14px] cursor-pointer  ' >AI Services</button>
                    </div>
                </div>

                <div className="h-full flex-[2] ">
                    <img src={image4} alt="" className='h-full object-contain ' />
                </div>

            </div>
        </div>
    )
}

export default Featured