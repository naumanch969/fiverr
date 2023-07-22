import React from 'react'
import { Facebook, Twitter, Pinterest, Instagram, Language, DoorbellSharp, CurrencyFranc, AccessAlarm } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Footer = () => {

  const footer = [
    {
      title: 'Categories',
      links: [
        { title: 'Graphics & Design', link: '' },
        { title: 'Video & Design', link: '' },
        { title: 'Writing & Translation', link: '' },
        { title: 'Ai Services', link: '' },
        { title: 'Digital Marketing', link: '' },
        { title: 'Music & Audio', link: '' },
        { title: 'Programming & Tech', link: '' },
        { title: 'Business', link: '' },
        { title: 'Lifestyle', link: '' },
      ]
    },
    {
      title: 'Categories',
      links: [
        { title: 'Graphics & Design', link: '' },
        { title: 'Video & Design', link: '' },
        { title: 'Writing & Translation', link: '' },
        { title: 'Ai Services', link: '' },
        { title: 'Digital Marketing', link: '' },
        { title: 'Music & Audio', link: '' },
        { title: 'Programming & Tech', link: '' },
        { title: 'Business', link: '' },
        { title: 'Lifestyle', link: '' },
      ]
    },
    {
      title: 'Categories',
      links: [
        { title: 'Graphics & Design', link: '' },
        { title: 'Video & Design', link: '' },
        { title: 'Writing & Translation', link: '' },
        { title: 'Ai Services', link: '' },
        { title: 'Digital Marketing', link: '' },
        { title: 'Music & Audio', link: '' },
        { title: 'Programming & Tech', link: '' },
        { title: 'Business', link: '' },
        { title: 'Lifestyle', link: '' },
      ]
    },
    {
      title: 'Categories',
      links: [
        { title: 'Graphics & Design', link: '' },
        { title: 'Video & Design', link: '' },
        { title: 'Writing & Translation', link: '' },
        { title: 'Ai Services', link: '' },
        { title: 'Digital Marketing', link: '' },
        { title: 'Music & Audio', link: '' },
        { title: 'Programming & Tech', link: '' },
        { title: 'Business', link: '' },
        { title: 'Lifestyle', link: '' },
      ]
    },
    {
      title: 'Categories',
      links: [
        { title: 'Graphics & Design', link: '' },
        { title: 'Video & Design', link: '' },
        { title: 'Writing & Translation', link: '' },
        { title: 'Ai Services', link: '' },
        { title: 'Digital Marketing', link: '' },
        { title: 'Music & Audio', link: '' },
        { title: 'Programming & Tech', link: '' },
        { title: 'Business', link: '' },
        { title: 'Lifestyle', link: '' },
      ]
    },
  ]

  return (
    <div className='flex justify-center text-[#999] my-[72px]  ' >
      <div className="max-w-[1100px] w-full  ">

        <div className="flex justify-between ">
          {
            footer.map((item, index) => (
              <div key={index} className="flex flex-col gap-[12px] ">
                <h2 className='text-[18px] text-[#555] font-medium ' >{item.title}</h2>
                <div className="flex flex-col gap-[4px] ">
                  {
                    item.links.map((link, index) => (
                      <Link to={link.link} key={index} className='font-light' >{link.title}</Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>

        <hr className='my-[50px] h-0 border-[1px] border-gray-300 ' />

        {/* copyright */}
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-[20px] ">
            <h2>fiverr</h2>
            <span className='text-[14px] ' >&copy; Fiverr International Ltd. 2023 </span>
          </div>
          <div className="flex items-center gap-[30px] ">
            <div className="flex items-center gap-[10px] ">
              <Facebook />
              <Twitter />
              <Facebook />
              <Pinterest />
              <Instagram />
            </div>
            <div className="flex items-center gap-[5px] ">
              <Language />
              <span>English</span>
            </div>
            <div className="flex items-center gap-[5px] ">
              <CurrencyFranc />
              <span>USD</span>
            </div>
            <AccessAlarm />
          </div>
        </div>

      </div>
    </div>
  )

}

export default Footer