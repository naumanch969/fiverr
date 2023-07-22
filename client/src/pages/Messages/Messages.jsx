import React from 'react'
import { Delete, Message } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Messages = () => {

 
  const rows = [
    {
      lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat facilis voluptatum praesentium. Quibusdam distinctio ad velit minima rem fuga et nulla laudantium delectus molestiae! Temporibus quos in eaque corrupti et eligendi molestiae ea.',
      date: '1 day ago',
      buyer: 'John Doe',
      button: true
    },
    {
      lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat facilis voluptatum praesentium. Quibusdam distinctio ad velit minima rem fuga et nulla laudantium delectus molestiae! Temporibus quos in eaque corrupti et eligendi molestiae ea.',
      date: '1 day ago',
      buyer: 'John Doe',
      button: true
    },
    {
      lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat facilis voluptatum praesentium. Quibusdam distinctio ad velit minima rem fuga et nulla laudantium delectus molestiae! Temporibus quos in eaque corrupti et eligendi molestiae ea.',
      date: '1 day ago',
      buyer: 'John Doe',
    },
    {
      lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat facilis voluptatum praesentium. Quibusdam distinctio ad velit minima rem fuga et nulla laudantium delectus molestiae! Temporibus quos in eaque corrupti et eligendi molestiae ea.',
      date: '1 day ago',
      buyer: 'John Doe',
    },
    {
      lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat facilis voluptatum praesentium. Quibusdam distinctio ad velit minima rem fuga et nulla laudantium delectus molestiae! Temporibus quos in eaque corrupti et eligendi molestiae ea.',
      date: '1 day ago',
      buyer: 'John Doe',
    },
  ]

  return (
    <div className='flex justify-center ' >
      <div className="max-w-[1100px] w-full py-[50px] ">

        <div className="flex justify-between items-center ">
          <h1 className='' >Messages</h1>
        </div>

        <table className='w-full ' >
          <tr className='h-[50px] ' >
            <th className='text-left px-[10px] ' >buyer</th>
            <th className='text-left px-[10px] ' >Last Message</th>
            <th className='text-left px-[10px] ' >Date</th>
            <th className='text-left px-[10px] ' >Action</th>
          </tr>
          {
            rows.map((row, index) => (
              <tr className={`${index == (0 || 1) ? 'bg-[#1dbf730f] ' : 'bg-white '} h-[50px] `} >
                <td className='px-[10px] font-medium ' >{row.buyer}</td>
                <td className='px-[10px] text-gray-500 ' ><Link to='/message/231' >{row.lastMessage.substring(0, 100)}...</Link></td>
                <td className='px-[10px] text-gray-500 ' >{row.date}</td>
                {
                  row.button &&
                  <td className='px-[10px]' ><button className='p-[10px] border-none bg-light-green text-white rounded-[5px] ' >Mark as read</button></td>
                }
              </tr>
            ))
          }
        </table>

      </div>
    </div>
  )
}

export default Messages