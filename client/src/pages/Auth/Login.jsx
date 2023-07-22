import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/user'
import Cookies from 'js-cookie'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setUserData] = useState({ email: '', password: '' })
    const { error } = useSelector(state => state.user)

    const handleLogin = (e) => {
        e.preventDefault()
        if (!userData.email || !userData.password) return alert('Please provide all the fields.')
        dispatch(login(userData, navigate))
    }

    return (
        <div className="relative bg-cover ">

            <div className="w-full h-full text-white flex flex-col justify-center items-center ">
                <form onSubmit={handleLogin} className='flex flex-col justify-around w-[300px] h-[310px] rounded-[5px] bg-main-color p-[10px] ' >
                    <h1 className='text-[25px] ' >Sign In</h1>
                    <input type="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} placeholder='Email' className='outline-none list-none h-[40px] rounded-[4px] bg-gray-500 text-white pl-[10px] placeholder:text-gray-100 ' />
                    <input type="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} placeholder='Password' className='outline-none list-none h-[40px] rounded-[4px] bg-gray-500 text-white pl-[10px] placeholder:text-gray-100 ' />
                    <button type='submit' className='h-[40px] rounded-[5px] bg-red-700 text-white blist-none text-[18px] font-medium cursor-pointer ' >Sign in</button>
                    <span className='text-gray-200 ' >New to Fiverr? {'  '}
                        <Link to='/auth/register' ><b className='text-white ' >Sign up now</b></Link>
                    </span>
                    <small>
                        {error && error}
                    </small>
                </form>
            </div>

        </div>
    )
}

export default Login