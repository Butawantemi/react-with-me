'use client';

import axios from "axios";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
    const router = useRouter()
    const Logout = async () => {
       try {
        await axios.get("/api/users/logout");
        router.push("/login")
       } catch (error: any) {
        console.log(error.message)
       }
    }

    return <div className='flex flex-col justify-center items-center min-h-screen py-2'>
        <h1>Profile Page</h1>
        <p>Profile Page</p>
        <hr />
        <button onClick={Logout} className='p-2 border border-gray-300 mb-4 focus:outline-none focus:border-gray-600 cursor-pointer rounded-lg'>Logout</button>
    </div>
}

export default ProfilePage;