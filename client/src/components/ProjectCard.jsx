import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ card }) => {
    return (
        <Link to='/' className='w-[24%] h-[250px] ' >
            <div style={{boxShadow:'0px 0px 16px -6px rgba(0,0,0,0.5)'}} className='w-full h-full text-white rounded-[5px] overflow-hidden cursor-pointer relative '  >

                <img src={card.image} alt="" className='w-full h-[70%] ' />

                <div className="h-[30%] flex items-center gap-[20px] p-[5px] ">
                    <img src={card.pp} alt="" className='w-[40px] h-[40px] rounded-full object-cover ' />
                    <div className="flex flex-col  ">
                        <h2 className='text-[14px] font-medium' >{card.category}</h2>
                        <span>{card.username}</span>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default ProjectCard