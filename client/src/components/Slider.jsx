import React from 'react'
import Slider from 'react-slick'

const SliderComponent = ({ children, slidesToShow, arrowsScroll }) => {
    return (
        <div className='flex justify-center py-[100px] bg-blue-200 ' >
            <div className="max-w-[1100px] w-full flex justify-between flex-wrap gap-[10px] ">

                <Slider dots={false} infinte={true} speed={500} slidesToShow={slidesToShow} slidesToScroll={arrowsScroll}  > 
                	{children}
                </Slider>

            </div>
        </div>
    )
}

export default SliderComponent
