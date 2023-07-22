import React from 'react'
import { image4 } from '../../assets'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='flex justify-center ' >
      <div className="max-w-[924px] w-full m-[50px] ">

        <span className='font-[400] text-[18px] text-gray-500 ' ><Link to='/messages' >MESSAGES </Link>{'>'} JOSH DOE </span>


        <div className="my-[30px] p-[50px] flex flex-col gap-[20px] max-h-[500px] h-fit overflow-y-scroll ">
          <div className="w-full ">
            <div className="flex gap-[8px] max-w-[600px]">
              <img src={image4} alt="" className='w-[40px] h-[40px] object-cover rounded-full ' />
              <p className='p-[10px] text-[15px] bg-gray-300 rounded-tl-0 rounded-bl-[20px] rounded-r-[20px] text-gray-500 font-light  ' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis atque reiciendis doloribus mollitia modi aspernatur cumque, unde explicabo cupiditate? Distinctio voluptatibus, dolorem sequi quos est iure vel nobis omnis iusto assumenda natus saepe!</p>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex flex-row-reverse gap-[8px] max-w-[600px] float-right ">
              <img src={image4} alt="" className='w-[40px] h-[40px] object-cover rounded-full ' />
              <p className='p-[10px] text-[15px] bg-blue-800 rounded-tr-0 rounded-br-[20px] rounded-l-[20px] text-white font-light  ' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis atque reiciendis doloribus mollitia modi aspernatur cumque, unde explicabo cupiditate? Distinctio voluptatibus, dolorem sequi quos est iure vel nobis omnis iusto assumenda natus saepe!</p>
            </div>
          </div>
        </div>

        <hr className='h-0 border-[1px] border-gray-300 mb-[20px] ' />
        <div className="flex items0center justify-between gap-[12px] ">
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10" className='flex-[9] h-[100px] p-[10px] border-[1px] border-gray-300 rounded-[10px] ' />
          <button className='flex-[1] h-max bg-light-green p-[10px] text-white font-medium border-none rounded-[10px] cursor-pointer  ' >Send</button>
        </div>

      </div>
    </div>
  )
}

export default Message