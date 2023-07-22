import React, { useState } from 'react'
import { gigs } from '../../data'
import { GigCard } from '../../components'
import { ArrowDownward } from '@mui/icons-material'

const Gigs = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const [sort, setSort] = useState('sales')

  const reSort = (type) => {
    setSort(type)
    setOpenMenu(false)
  }

  return (
    <div className='flex justify-center' >
      <div className="max-w-[1100px] w-full py-[30px] flex flex-col gap-[15px] ">

        <div className="flex flex-col ">

          <span className='font-[400] text-[18px] text-gray-500 ' >FIVERR {'>'} GRAPHICS {'>'} DESIGN</span>
          <div className="flex flex-col gap-[4px] ">
            <h1 className='text-[38px] font-medium ' >AI Artists</h1>
            <p className='text-gray-700 font-light text-[20px] ' >Explore the boundaries of art and technoloty with Fiverr's AI artists</p>
          </div>

          <div className="flex items-center justify-between mt-[12px] ">

            <div className="flex items-center gap-[10px] text-[#555] ">
              <span className='font-medium' >Budget</span>
              <input type="text" placeholder='min' className='w-[8rem] border-[1px] border-gray-500 p-[4px] rounded-[4px] placeholder:text-gray-500 ' />
              <input type="text" placeholder='max' className='w-[8rem] border-[1px] border-gray-500 p-[4px] rounded-[4px] placeholder:text-gray-500 ' />
              <button className='bg-light-green text-white font-medium boder-none cursor-pointer py-[5px] px-[10px] rounded-[5px] ' >Apply</button>
            </div>

            <div className="relative flex items-center gap-[10px] ">
              <span className='font-light text-[#555] ' >Sort By</span>
              <span className=' font-medium  ' > {sort == 'sales' ? 'Best Selling' : 'Newest'} </span>
              <ArrowDownward onClick={() => setOpenMenu(pre => !pre)} className='cursor-pointer' />
              {
                openMenu &&
                <div className="absolute top-[30px] right-0 flex flex-col gap-[20px] tet-[#555] p-[20px] bg-white rounded-[5px] border-[1px] border-gray-300 ">
                  {
                    sort == 'sales'
                      ?
                      <span onClick={() => reSort('createdAt')} className='cursor-pointer ' >Newest</span>
                      :
                      <span onClick={() => reSort('sales')} className='cursor-pointer ' >Best Selling</span>
                  }
                </div>
              }
            </div>
          </div>

        </div>


        <div className="flex flex-wrap justify-between gap-[12px] ">
          {
            gigs.map((gig, index) => (
              <GigCard card={gig} key={index} />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Gigs