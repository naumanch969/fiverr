import React from 'react'

const AddGig = () => {
  return (
    <div className='flex justify-center  ' >
      <div className="max-w-[1100px] w-full py-[50px] ">

        <h1 className='font-light  mb-[40px] text-gray-500 ' >Add new gig</h1>

        <div className="flex juistify-between gap-[100px] ">
          <div className="flex justify-start flex-col gap-[10px] flex-1 ">
            <label className='text-gray-800 text-[20px] font-medium ' >Title</label>
            <input className='p-[20px] w-full border-[1px] border-gray-300 ' type="text" placeholder="eg. I will do something I'm really good at" />
            <label className='text-gray-800 text-[20px] font-medium ' >Category</label>
            <select className='p-[20px] w-full border-[1px] border-gray-300 ' >
              <option value="design">Design</option>
              <option value="design">Web Development</option>
              <option value="design">Animation</option>
              <option value="design">Music</option>
              <option value="design">Voice Over</option>
            </select>
            <label className='text-gray-800 text-[20px] font-medium ' >Cover Image</label>
            <input className='p-[20px] w-full border-gray-300 ' type="file" />
            <label className='text-gray-800 text-[20px] font-medium ' >Upload Images</label>
            <input className='p-[20px] w-full border-gray-300 ' type="file" multiple />
            <label className='text-gray-800 text-[20px] font-medium ' >Price</label>
            <input className='p-[20px] w-full border-[1px] border-gray-300 ' type="number" min={1} />
            <label className='text-gray-800 text-[20px] font-medium ' >Description</label>
            <textarea className='p-[20px] w-full border-[1px] border-gray-300 ' placeholder='Brief description to introduce your service to customers' cols="30" rows="10" />
            <button className='border-none p-[20px] bg-light-green text-white cursor-pointer font-bold text-[19px] ' >Create</button>
          </div>


          <div className="flex justify-start flex-col gap-[10px] flex-[1] ">
            <label className='text-gray-800 text-[20px] font-medium ' >Service Title</label>
            <input className='p-[20px] w-full border-[1px] border-gray-300 ' type="text" placeholder='e.g. One page web design' />
            <label className='text-gray-800 text-[20px] font-medium ' >Short Description</label>
            <textarea className='p-[20px] w-full border-[1px] border-gray-300 ' placeholder='Short description of your service' cols="30" rows="10"></textarea>
            <label className='text-gray-800 text-[20px] font-medium ' >Delivery Time</label>
            <input className='p-[20px] w-full border-[1px] border-gray-300 ' type="number" min={1}  />
            <label className='text-gray-800 text-[20px] font-medium ' >Revision Number</label>
            <input className='p-[20px] w-full border-[1px] border-gray-300 ' type="number" min={1}  />
            <label className='text-gray-800 text-[20px] font-medium ' >Add Features</label>
            <input className='p-[20px] w-full border-[1px] border-gray-300 ' type="text" placeholder='e.g. page design' />
            <input className='p-[20px] w-full border-[1px] border-gray-300 ' type="text" placeholder='e.g. file uploading' />
            <input className='p-[20px] w-full border-[1px] border-gray-300 ' type="text" placeholder='e.g. setting up a domain' />
            <input className='p-[20px] w-full border-[1px] border-gray-300 ' type="text" placeholder='e.g. hosting' />
          </div>


        </div>

      </div>
    </div>
  )
}

export default AddGig