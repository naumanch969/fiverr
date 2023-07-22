import { useRef, useState } from 'react'
// import { logo, register } from '../../assets'
import { Link, useNavigate } from 'react-router-dom'
import { Switch } from '@mui/material'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/actions/user'

const Register = () => {

    const [userData, setUserData] = useState({ username: '', email: '', password: '', image: '', currency: '', isSeller: false, phone: '', description: '' })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = () => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleRegister = () => {
        dispatch(register(userData, navigate))
    }

    return (
        <div className="flex flex-col justify-center items-center gap-[1rem] w-full h-full ">

            <form onSubmit={handleRegister} className='w-[60%] text-dark-gray flex justify-between items-center gap-[1rem]  ' >
                <div className="flex-[1] flex flex-col items-start justify-start gap-[8px] p-[2rem] ">
                    <h2 className='text-[24px] font-semibold text-black ' >Create a new account</h2>
                    <div className="w-full flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >Username</label>
                        <input onChange={handleChange} value={userData.username} name='username' className="h-[40px] w-full border-[1px] border-dark-gray px-[12px] rounded-[4px] " type="text" placeholder="Username" />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >email</label>
                        <input onChange={handleChange} value={userData.email} name='email' className="h-[40px] w-full border-[1px] border-dark-gray px-[12px] rounded-[4px] " type="email" placeholder="Email" />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >password</label>
                        <input onChange={handleChange} value={userData.password} name='password' className="h-[40px] w-full border-[1px] border-dark-gray px-[12px] rounded-[4px] " type="password" placeholder="Password" />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >Image</label>
                        <FileBase type='file' onDone={(image) => setUserData({ ...userData, image })} />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >Country</label>
                        <input onChange={handleChange} value={userData.country} name='country' className="h-[40px] w-full border-[1px] border-dark-gray px-[12px] rounded-[4px] " type="text" placeholder="Country" />
                    </div>
                    <button type='submit' className="h-full bg-light-green text-white text-[18px] cursor-pointer py-[4px] px-[1rem] rounded-[8px] mt-[12px] " >Create Accunt</button>
                </div>
                <div className="flex-[1] flex flex-col items-start justify-start gap-[8px] p-[2rem] ">
                    <h2 className='text-[24px] font-semibold text-black ' >I want to become a seller</h2>
                    <div className="">
                        <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >Activate the seller account</label>
                        <Switch onChange={(e) => setUserData({ ...userData, isSeller: e.target.checked })} />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >Phone</label>
                        <input onChange={handleChange} value={userData.phone} name='phone' className="h-[40px] w-full border-[1px] border-dark-gray px-[12px] rounded-[4px] " type="number" placeholder="Phone" />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >Description</label>
                        <textarea cols="30" rows="10" onChange={handleChange} value={userData.email} name='description' className="w-full border-[1px] border-dark-gray px-[12px] rounded-[4px] " placeholder="Write your short intro..." />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Register