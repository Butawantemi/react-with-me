'use client';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios  from 'axios'


const LoginPage = () => {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);



    const onLogin = async () => {
      try {
        const response = await axios.post("/api/users/login", user);;
        console.log("Login successful", response.data);
        router.push("/profile");
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
          if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
          } else {
            setButtonDisabled(true)
          }
        },
          [user])

    return <div className='flex flex-col justify-center items-center min-h-screen py-2'>
      <h1>SignUp</h1>
      <label htmlFor='email'>Email</label>
      <input className='p-2 border border-gray-300 mb-4 focus:outline-none focus:border-gray-600 cursor-pointer rounded-lg' id='email' type="text" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder='email...'/>
      <hr />
      <label htmlFor='password'>Password</label>
      <input className='p-2 border border-gray-300 mb-4 focus:outline-none focus:border-gray-600 cursor-pointer rounded-lg' id='password' type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder='password...'/>
      <hr />
      <button onClick={onLogin} className='p-2 border border-gray-300 mb-4 focus:outline-none focus:border-gray-600 cursor-pointer rounded-lg'>{buttonDisabled ? "No login": "Login"}</button>
      <Link href={'/signup'}>Visit SignUp Page</Link>
    </div>
  }
  
  export default LoginPage;