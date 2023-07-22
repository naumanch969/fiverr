import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { image0 } from '../assets'
import { useSelector } from 'react-redux'
import { logout } from '../redux/actions/user'

const Navbar = () => {

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [active, setActive] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const { loggedUser } = useSelector(state => state.user)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', isActive)
    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, [])

  useEffect(() => {
    pathname != '/' && setActive(true)
  }, [pathname])


  const handleLogout = () => {
    dispatchEvent(logout(navigate))
  }

  return (
    <div className={` ${active ? 'bg-white text-black' : 'bg-dark-green text-white '} z-50 flex flex-col items-center sticky top-0 transition-all ease-in-out`} >

      <div className="max-w-[1100px] w-full flex justify-between items-center py-[20px] ">

        <Link to='/' className="text-[34px] font-bold ">
          <span className=' ' >fiverr</span>
          <span className='text-[#1dbf73] ' >.</span>
        </Link>

        <div className="flex items-center gap-[24px] font-light ">
          <Link to='' >Fiverr Business</Link>
          <Link to='' >Explore</Link>
          <Link to='' >English</Link>
          <Link to='/auth/login' >Sign in</Link>
          {!loggedUser?.isSeller && <Link to='/auth/register' >Become a Seller</Link>}
          {!loggedUser?.username && <Link to='/auth/login' className='text-white bg-transparent hover:bg-light-green hover:border-light-green px-[20px] py-[10px] rounded-[5px] border-[1px] border-white cursor-pointer ' >Join</Link>}

          {loggedUser && (
            <div onClick={() => setOpenMenu(pre => !pre)} className='flex items-center gap-[10px] cursor-pointer relative ' >
              <img src={image0} alt="image" className='w-[32px] h-[32px] object-cover rounded-full ' />
              <span>{loggedUser?.username}</span>
              {
                openMenu &&
                <div className="absolute top-[50px] right-0 flex flex-col gap-[10px] text-gray-500 w-[200px] font-light p-[20px] bg-white border-[1px] rounded-[10px] border-gray-300 ">
                  {
                    loggedUser.isSeller &&
                    <>
                      <Link to='/mygigs' >Gigs</Link>
                      <Link to='/add' >Add New Gig</Link>
                    </>
                  }
                  <Link to='/orders' >Orders</Link>
                  <Link to='/messages' >Messages</Link>
                  <Link onClick={handleLogout} >Logout</Link>
                </div>
              }
            </div>
          )}
        </div>

      </div>

      {
        active &&
        <>
          <hr className='w-full h-0 border-[1px] border-gray-300 ' />

          <div className="max-w-[1100px] w-full py-[10px] flex justify-between font-light text-gray-500 font-[Montserrat] ">
            <Link to='' >Graphics & Design</Link>
            <Link to='' >Video & Animation</Link>
            <Link to='' >Writing & Translation</Link>
            <Link to='' >Ai Services</Link>
            <Link to='' >Digital Marketing</Link>
            <Link to='' >Music & Audio</Link>
            <Link to='' >Proamming & Tech</Link>
            <Link to='' >Business</Link>
            <Link to='' >Lifestyle</Link>
          </div>

          <hr className='w-full h-0 border-[1px] border-gray-300 ' />
        </>
      }

    </div>
  )
}

export default Navbar