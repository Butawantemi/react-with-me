const userProfile = ({params}: any) => {
    return <div className='flex flex-col justify-center items-center min-h-screen py-2'>
        <h1>Profile Page</h1>
        <p>Profile Page {params.id}</p>
    </div>
}

export default userProfile;