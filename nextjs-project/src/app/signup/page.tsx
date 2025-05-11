'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios  from 'axios'

const SignUpPage = () => {
  const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
      if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
        setButtonDisabled(false)
      } else {
        setButtonDisabled(true)
      }
    },
      [user])

    const onSignup = async () => {
      try {
        const response = await axios.post("api/users/signup", user)
        console.log(response.data)
        router.push("/login")
      } catch (error) {
        console.log(error)
      }
    }

    return <div className='flex flex-col justify-center items-center min-h-screen py-2'>
      <h1>SignUp</h1>
      <hr />
      <label htmlFor='username'>Username</label>
      <input className='p-2 border border-gray-300 mb-4 focus:outline-none focus:border-gray-600 cursor-pointer rounded-lg' id='username' type="text" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} placeholder='username...'/>
      <hr />
      <label htmlFor='email'>Email</label>
      <input className='p-2 border border-gray-300 mb-4 focus:outline-none focus:border-gray-600 cursor-pointer rounded-lg' id='email' type="text" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder='email...'/>
      <hr />
      <label htmlFor='password'>Password</label>
      <input className='p-2 border border-gray-300 mb-4 focus:outline-none focus:border-gray-600 cursor-pointer rounded-lg' id='password' type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder='password...'/>
      <hr />
      <button onClick={onSignup} className='p-2 border border-gray-300 mb-4 focus:outline-none focus:border-gray-600 cursor-pointer rounded-lg'>{buttonDisabled ? "No signup": "Signup"}</button>
      <Link href={'/login'}>Visit Login Page</Link>
    </div>
  }
  
  export default SignUpPage;