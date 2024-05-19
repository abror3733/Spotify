import React from 'react'

function Login() {
  const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=86b1bb637e7b468ea67d15e307b0e44f&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played"
  return (
    <div className='text-white bg-[#171717] h-[100vh] w-full flex items-center justify-center  '>
    <a className='bg-green-500 px-10 py-5 text-[20px] font-bold shadow-md shadow-[green] rounded-md' href={AUTH_URL}>Login to Spotify</a>
  </div>
  )
}

export default Login