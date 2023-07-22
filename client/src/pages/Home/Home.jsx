import React from 'react'
import Featured from './Featured'
import TrustedBy from './TrustedBy'
import { CategoryCard, ProjectCard, Slider } from '../../components'
import { categoryCards, projects } from '../../data'
import FiverrSolution from './FiverrSolution'
import Features from './Features'

const Home = () => {
  return (
    <div>

      <Featured />
      <TrustedBy />
      <Slider slidesToShow={4} arrowsScroll={4}  >
        {
          categoryCards.slice(0,4).map((card, index) => (
            <CategoryCard key={index} card={card} />
          ))
        }
      </Slider>
      <Features />
      <FiverrSolution />
      <Slider slidesToShow={4} arrowsScroll={4} >
        {
          projects.slice(0,4).map((card, index) => (
            <ProjectCard key={index} card={card} />
          ))
        }
      </Slider>



    </div>
  )
}

export default Home