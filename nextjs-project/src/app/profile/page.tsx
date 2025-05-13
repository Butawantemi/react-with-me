'use client';

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


const ProfilePage = () => {
    const [data, setData] = useState();
    const router = useRouter()
    const Logout = async () => {
       try {
        await axios.get("/api/users/logout");
        router.push("/login")
       } catch (error: any) {
        console.log(error.message)
       }
    }


        const getUserDetails = async () => {
          const response = await axios.get("/api/users/me");
          console.log(response.data.data);
          setData(response.data.data._id);
        }

    return <div className='flex flex-col justify-center items-center min-h-screen py-2'>
        <h1>Profile Page</h1>
        <p>Profile Page</p>
        <hr />
        <h2>{data !== null ? <Link href={`/profile/${data}`}>{data}</Link> : "Nothing"}</h2>
        <hr />
        <button onClick={Logout} className='p-2 border border-gray-300 mb-4 focus:outline-none focus:border-gray-600 cursor-pointer rounded-lg'>Logout</button>
        <button onClick={getUserDetails} className='p-2 border border-gray-300 mb-4 focus:outline-none focus:border-gray-600 cursor-pointer rounded-lg'>User details</button>
    </div>
}

export default ProfilePage;