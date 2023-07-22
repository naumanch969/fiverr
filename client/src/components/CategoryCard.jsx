import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ card }) => {
    return (
        <Link to='/gigs?cat=design' >
            <div className='w-[264px] h-[344px] text-white rounded-[5px] cursor-pointer relative '  >
                <img src={card.image} alt="" className='w-full h-full object-cover ' />
                <span className='font-light absolute top-[15px] left-[15px] ' >{card.description}</span>
                <span className='font-medium text-[24px] absolute left-[15px] top-[40px]  ' >{card.title}</span>
            </div>
        </Link>
    )
}

export default CategoryCard