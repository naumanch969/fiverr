import React from 'react'
import { image3, image5, image6, image4, image8 } from '../../assets'
import { Delete } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const MyGigs = () => {


  const rows = [
    {
      image: image5,
      title: 'gig1',
      price: 44,
      sales: 3343
    },
    {
      image: image4,
      title: 'gig2',
      price: 44,
      sales: 3343
    },
    {
      image: image6,
      title: 'gig3',
      price: 44,
      sales: 3343
    },
    {
      image: image8,
      title: 'gig4',
      price: 44,
      sales: 3343
    },
    {
      image: image5,
      title: 'gig5',
      price: 44,
      sales: 3343
    },
  ]

  return (
    <div className='flex justify-center ' >
      <div className="max-w-[1100px] w-full py-[50px] ">

        <div className="flex justify-between items-center ">
          <h1 className='' >Gigs</h1>
          <Link to='/add' className='bg-light-green p-[10px] text-white font-medium ' >Add New Gig</Link>
        </div>

        <table className='w-full ' >
          <thead>
            <tr className='h-[50px] ' >
              <th className='text-left ' >Image</th>
              <th className='text-left ' >Title</th>
              <th className='text-left ' >Price</th>
              <th className='text-left ' >Sales</th>
              <th className='text-left ' >Action</th>
            </tr>
          </thead>
          <tbody>
            {
              rows.map((row, index) => (
                <tr key={index} className={`${index % 2 == 0 ? 'bg-[#1dbf730f] ' : 'bg-white '} h-[50px] `} >
                  <td><img src={row.image} alt="" className='w-[50px] h-[25px] object-cover ' /></td>
                  <td>{row.title}</td>
                  <td>{row.price}</td>
                  <td>{row.sales}</td>
                  <td><Delete /></td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default MyGigs