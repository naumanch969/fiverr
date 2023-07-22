import React from 'react'
import { Rating } from '@mui/material'
import { Watch } from '@mui/icons-material'
import { image3, image4, image5, image6 } from '../../assets'
// import Slider from 'infinite-react-carousal'

const Gig = () => {

  const comments = [
    {
      comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta placeat tempora minus hic iste? Voluptate fuga soluta itaque. Minus suscipit debitis sint non itaque, sed qui excepturi esse quia rem sapiente expedita repellendus vitae sunt porro vero mollitia architecto quidem dolorem. Ut maiores modi quaerat beatae id eum. Eaque adipisci totam illum quod consequuntur? Officia, quos iste eius obcaecati impedit eligendi recusandae fugiat illum dolorem quibusdam eaque tenetur vitae at sint dolores fuga quam laborum facilis delectus quisquam ipsum incidunt odit eos labore? Dolore eaque voluptatem deleniti laudantium minus.',
      rating: 4,
      userImage: image5,
      countryFlag: image4,
      country: 'United States',
      username: 'John Dow'
    },
    {
      comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta placeat tempora minus hic iste? Voluptate fuga soluta itaque. Minus suscipit debitis sint non itaque, sed qui excepturi esse quia rem sapiente expedita repellendus vitae sunt porro vero mollitia architecto quidem dolorem. Ut maiores modi quaerat beatae id eum. Eaque adipisci totam illum quod consequuntur? Officia, quos iste eius obcaecati impedit eligendi recusandae fugiat illum dolorem quibusdam eaque tenetur vitae at sint dolores fuga quam laborum facilis delectus quisquam ipsum incidunt odit eos labore? Dolore eaque voluptatem deleniti laudantium minus.',
      rating: 4,
      userImage: image5,
      countryFlag: image4,
      country: 'United States',
      username: 'John Dow'
    },
    {
      comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta placeat tempora minus hic iste? Voluptate fuga soluta itaque. Minus suscipit debitis sint non itaque, sed qui excepturi esse quia rem sapiente expedita repellendus vitae sunt porro vero mollitia architecto quidem dolorem. Ut maiores modi quaerat beatae id eum. Eaque adipisci totam illum quod consequuntur? Officia, quos iste eius obcaecati impedit eligendi recusandae fugiat illum dolorem quibusdam eaque tenetur vitae at sint dolores fuga quam laborum facilis delectus quisquam ipsum incidunt odit eos labore? Dolore eaque voluptatem deleniti laudantium minus.',
      rating: 4,
      userImage: image5,
      countryFlag: image4,
      country: 'United States',
      username: 'John Dow'
    },
    {
      comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta placeat tempora minus hic iste? Voluptate fuga soluta itaque. Minus suscipit debitis sint non itaque, sed qui excepturi esse quia rem sapiente expedita repellendus vitae sunt porro vero mollitia architecto quidem dolorem. Ut maiores modi quaerat beatae id eum. Eaque adipisci totam illum quod consequuntur? Officia, quos iste eius obcaecati impedit eligendi recusandae fugiat illum dolorem quibusdam eaque tenetur vitae at sint dolores fuga quam laborum facilis delectus quisquam ipsum incidunt odit eos labore? Dolore eaque voluptatem deleniti laudantium minus.',
      rating: 4,
      userImage: image5,
      countryFlag: image4,
      country: 'United States',
      username: 'John Dow'
    },
    {
      comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta placeat tempora minus hic iste? Voluptate fuga soluta itaque. Minus suscipit debitis sint non itaque, sed qui excepturi esse quia rem sapiente expedita repellendus vitae sunt porro vero mollitia architecto quidem dolorem. Ut maiores modi quaerat beatae id eum. Eaque adipisci totam illum quod consequuntur? Officia, quos iste eius obcaecati impedit eligendi recusandae fugiat illum dolorem quibusdam eaque tenetur vitae at sint dolores fuga quam laborum facilis delectus quisquam ipsum incidunt odit eos labore? Dolore eaque voluptatem deleniti laudantium minus.',
      rating: 4,
      userImage: image5,
      countryFlag: image4,
      country: 'United States',
      username: 'John Dow'
    },
  ]
  return (
    <div className='' >
      <div className="max-w-[1100px] w-full py-[30px] flex justify-center gap-[50px] ">

        <div className="flex-[2] flex flex-col gap-[20px] ">
          <span className='font-light text-[14px] text-[#555] ' >FIVERR {'>'} GRAPHICS & DESIGN </span>
          <h1>I will create ai generated art for you</h1>
          <div className="flx items-center gap-[10px]  ">
            <img src={image3} alt="" className='w-[32px] h-[32px] rounded-full object-cover ' />
            <span className=' text-[14px] font-medium ' >John Doe</span>
            <div className="flex gap-[5px] ">
              <Rating />
              <span className='text-[14px] font-bold text-yellow-500 ' >5</span>
            </div>
          </div>
          {/* 
          <Slider slidesToShow={1} arrowsScroll={1} className=' ' >
            <img src={image4} alt="" className='max-w-[500px] object-contain ' />
            <img src={image5} alt="" className='max-w-[500px] object-contain ' />
            <img src={image6} alt="" className='max-w-[500px] object-contain ' />
          </Slider> */}

          <h2 className='font-medium  ' >About This Gig</h2>

          <p className='font-light leading-[25px] ' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum a cum animi odit? Repudiandae doloribus placeat reprehenderit facilis culpa eaque aut? Quo nemo fuga eveniet, nihil iste ex tenetur voluptatum in, cum similique veniam accusamus tempora ipsum itaque voluptatibus ab temporibus possimus quis? Praesentium obcaecati cum nam tenetur totam molestiae eum. Quisquam laborum eius dolore quo facilis, ipsam autem. Ea ratione mollitia consectetur accusamus sit, incidunt quaerat qui, dolorem autem aliquam consequuntur minus quos dolorum iusto maiores perspiciatis placeat! Temporibus dicta quibusdam possimus. Dignissimos assumenda odit eos aspernatur similique eveniet laborum nisi quo, earum minus dolore culpa voluptatum laboriosam porro voluptates, delectus nam repellat voluptas itaque ipsa ab, ut libero. Ab saepe, mollitia ea in voluptatibus, perspiciatis earum deleniti, corporis sit culpa autem? Aliquid neque corrupti, voluptatum natus laboriosam fugit id optio, a fuga amet ad nostrum eum quasi suscipit laudantium, facilis sequi veritatis dolore ducimus? Ipsam distinctio fuga tempore.</p>

          <div className="mt-[50px] flex flex-col gap-[20px] ">
            <h2>About The Seller</h2>
            <div className="flex items-center gap-[20px] ">
              <img src={image5} alt="" className='w-[100px] h-[100px] rounded-full object-cover ' />
              <div className="flex flex-col gap-[10px] ">
                <span className='' >John Doe</span>
                <div className="flex gap-[5px] ">
                  <Rating />
                  <span className='text-[14px] font-bold text-yellow-500 ' >5</span>
                </div>
                <button className='bg-white rounded-[5px] border-[1px] border-gray-500 p-[10px] cursor-pointer ' >Contact</button>
              </div>
            </div>

            <div className="border-[1px] border-gray-300 rounded-[5px] p-[20px] mt-[20px] ">
              <div className="flex flex-wrap ">
                <div className="w-[300px] flex flex-col gap-[10px] mb-[20px] ">
                  <span className='font-light ' >Title</span>
                  <span className="font-medium ">USA</span>
                </div>
                <div className="w-[300px] flex flex-col gap-[10px] mb-[20px] ">
                  <span className='font-light ' >Member since</span>
                  <span className="font-medium ">Aug 2022</span>
                </div>
                <div className="w-[300px] flex flex-col gap-[10px] mb-[20px] ">
                  <span className='font-light ' >Avg. response rate</span>
                  <span className="font-medium ">4 hours</span>
                </div>
                <div className="w-[300px] flex flex-col gap-[10px] mb-[20px] ">
                  <span className='font-light ' >Last delivery</span>
                  <span className="font-medium ">1 day ago</span>
                </div>
                <div className="w-[300px] flex flex-col gap-[10px] mb-[20px] ">
                  <span className='font-light ' >Languages</span>
                  <span className="font-medium ">English</span>
                </div>
              </div>

              <hr className='h-0 border-[1px] border-gray-300 w-full mb-[20px] ' />

              <div className="text-[#99999] ">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptatum reprehenderit blanditiis nostrum debitis, perferendis eaque exercitationem temporibus possimus dolor aperiam optio magnam commodi sit, iusto illo et tempora impedit, autem corrupti quo ut magni amet! Accusamus molestias ullam mollitia praesentium ipsa expedita tempora alias odio non quia, magnam iusto exercitationem, ratione, illo temporibus rem veniam! Aliquid, ut. Dolorem voluptate eum tempora, beatae enim veritatis iure nam dignissimos obcaecati quo totam vero minima illum, vel neque provident dolorum, animi pariatur quisquam. Autem tempora dignissimos optio ut dicta explicabo voluptas officia, nobis nostrum aliquam aperiam, facere adipisci soluta. Consequuntur, tenetur eveniet?</p>
              </div>
            </div>


            .

          </div>



          <div className="mt-[50px] flex flex-col ">
            <h2>Reviews</h2>
            <div className=" ">
              {
                comments.map((comment, index) => (
                  <>
                    <div className="flex flex-col gap-[20px] my-[20px] ">

                      <div className="flex items-center">
                        <img src={comment.userImage} alt="" className='w-[50px] h-[50px] rounded-full ' />

                        <div className="flex flex-col ">
                          <span>{comment.username}</span>
                          <div className="flex items-center gap-[10px] text-gray-500 ">
                            <img src={comment.countryFlag} alt="" className='w-[20px]  ' />
                            <span>{comment.country}</span>
                          </div>
                        </div>

                      </div>

                      <div className="flex gap-[5px] ">
                        <Rating />
                        <span className='text-[14px] font-bold text-yellow-500 ' >{comment.rating}</span>
                      </div>

                      <p>{comment.comment}</p>

                      <div className="flex items-center gap-[10px] ">
                        <span>Helpful?</span>
                        <ThumbUpOutlined />
                        <span>yes</span>
                        <ThumbDownAltOutlined />
                        <span>no</span>
                      </div>
                    </div>

                    <hr className='h-0 border-[1px] border-gray-300 my-[50px] ' />
                  </>
                ))
              }
            </div>
          </div>

        </div>





        <div className="flex-[1] border-[1px] border-gray-300 p-[20px] rounded-[5px] flex flex-col gap-[20px] sticky top-[150px] h-max max-h-[500px]  ">

          <div className="flex items-center justify-between ">
            <h3 className='font-light ' >1 AiI generated image</h3>
            <h4 className='font-medium' >$59.99</h4>
          </div>

          <p className='text-gray-500 my-[10px] ' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ut possimus illum quo, voluptatibus maiores fugit alias accusantium, aliquid aut fugiat, totam saepe!</p>

          <div className="flex justify-between items-center text-[14px] ">
            <div className="flex items-center gap-[10px] ">
              <Watch />
              <span>2 days Delivery</span>
            </div>
            <div className="flex items-center gap-[10px] ">
              <Watch />
              <span>3 Revisions</span>
            </div>
          </div>

          <div className="flex flex-col gap-[5px] ">
            <div className="flex items-center gap-[10px] font-light text-gray-500 ">
              <Check className='text-[18px] ' />
              <span>Prompt writing</span>
            </div>
            <div className="flex items-center gap-[10px] font-light text-gray-500 ">
              <Check className='text-[18px] ' />
              <span>Artwork delivery</span>
            </div>
            <div className="flex items-center gap-[10px] font-light text-gray-500 ">
              <Check className='text-[18px] ' />
              <span>Image uploading</span>
            </div>
            <div className="flex items-center gap-[10px] font-light text-gray-500 ">
              <Check className='text-[18px] ' />
              <span>Addition Desing</span>
            </div>
          </div>
          <button className='bg-light-green p-[10px] text-white border-none font-medium text-[18px] cursor-pointer ' >Continue</button>

        </div>




      </div>
    </div>
  )
}

export default Gig