import React from 'react'
import { image4, image5, image6, image8 } from '../../assets'
import { Delete, Message } from '@mui/icons-material'

const Orders = () => {

  const currentUser = { _id: 1, username: 'John Doe', isSeller: true }

  const rows = [
    {
      image: image5,
      title: 'gig1',
      price: 44,
      buyer: 'John Doe'
    },
    {
      image: image4,
      title: 'gig2',
      price: 44,
      buyer: 'John Doe'
    },
    {
      image: image6,
      title: 'gig3',
      price: 44,
      buyer: 'John Doe'
    },
    {
      image: image8,
      title: 'gig4',
      price: 44,
      buyer: 'John Doe'
    },
    {
      image: image5,
      title: 'gig5',
      price: 44,
      buyer: 'John Doe'
    },
  ]

  return (
    <div className='flex justify-center ' >
      <div className="max-w-[1100px] w-full py-[30px] ">

        <div className="flex justify-between items-center ">
          <h1 className='text-[36px] font-semibold ' >Orders</h1>
        </div>

        <table className='w-full ' >
          <tr className='h-[50px] ' >
            <th className='text-left ' >Image</th>
            <th className='text-left ' >Title</th>
            <th className='text-left ' >Price</th>
            <th className='text-left ' >{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
            <th className='text-left ' >Contact</th>
          </tr>
          {
            rows.map((row, index) => (
              <tr className={`${index % 2 == 0 ? 'bg-[#1dbf730f] ' : 'bg-white '} h-[50px] `} >
                <td><img src={row.image} alt="" className='w-[50px] h-[25px] object-cover ' /></td>
                <td>{row.title}</td>
                <td>{row.price}</td>
                <td>{row.buyer}</td>
                <td><Message /></td>
              </tr>
            ))
          }
        </table>

      </div>
    </div>
  )
}

export default Orders