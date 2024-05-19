
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Library from '../../pages/Library'
import Liked from '../../pages/Liked'
import PlayList from '../../pages/PlayList'
import Search from '../../pages/Search'
import SpotifyWebApi from 'spotify-web-api-node'

import NavbarLink from '../../components/NavbarLink/NavbarLink'
import homeImg from '../../assets/Images/home.svg'
import SearchImg from '../../assets/Images/Search.svg'
import LibraryImg from '../../assets/Images/Library.svg'
import likedImg from '../../assets/Images/liked.svg'
import createImg from '../../assets/Images/create.svg'
import Union from '../../assets/Images/Union.svg'
import XX from '../../assets/Images/xx.svg'
import frame from '../../assets/Images/Frame.svg'
import footer from '../../assets/Images/image.png'
import { useAuth } from '../../hook/useAuth'
import { useEffect, useState } from 'react'


function App1({code}) {

  const accsessToken =useAuth(code)
  const spotifyApi =new SpotifyWebApi({
    clientId:"86b1bb637e7b468ea67d15e307b0e44f"
  })
  const [title,setTitle] =useState("")
  const [album,setAlbum] =useState("")
  const [artist,setArtist] =useState([])

   useEffect(()=>{
    if(!accsessToken) return 
    spotifyApi.setAccessToken(accsessToken)
   },[accsessToken,title,album])

   useEffect(()=>{
    if(title){
      spotifyApi.searchTracks(title).then(res=> {
       setArtist(res.body.tracks.items.map(item=> {
           const data = {
             img:item.album.images[0].url,
             name:item.name,
             uri:item.artists[0]
           }
           return data
       }))
      })
    }
   
    else{
      setArtist([])
    }
   },[accsessToken,title])
  
   const [albumList,setAlbumList] =useState([])
   useEffect(()=>{
    if(album){
      spotifyApi.searchAlbums(album).then(res=>{
        setAlbumList(res.body.albums.items.map(item=>{
          const data = {
            img:item.images[0].url,
            name:item.name,
            uri:item.artists[0]
          }
          return data
        }))
      })
    }
   },[accsessToken,album])
  return (
  <div className='flex container mx-auto relative'>
    <div className='absolute bottom-0 w-full z-1 bg-[#181818] text-center mx-auto text-[30px] flex items-center justify-center'>
    <img className=' ' src={footer} alt="" />
    </div>
     <div className=' w-[22%] h-[100vh] pt-[50px] pl-[30px] pr-[15px] space-y-[50px]  flex flex-col overflow-auto '>
          <div className='flex flex-col space-y-[10px]'>
          <NavbarLink url={'/'} title={'Home'}>
           <img src={homeImg} alt="logo img" width={32} height={32} />
         </NavbarLink>
         <NavbarLink url={'/search'} title={'Search'}>
           <img src={SearchImg} alt="logo img" width={32} height={32} />
         </NavbarLink>
         <NavbarLink url={'/library'} title={'Your Library'}>
           <img src={LibraryImg} alt="logo img" width={32} height={32} />
         </NavbarLink>
          </div>
         <div className='flex flex-col space-y-[10px] pb-5 border-b-[1px] border-[#424040]'>
         <NavbarLink url={'/playlist'} title={'Create Playlist'}>
           <img src={createImg} alt="logo img" width={32} height={32} />
         </NavbarLink>
         <NavbarLink url={'/liked'} title={'Liked Songs'}>
           <img src={likedImg} alt="logo img" width={32} height={32} />
         </NavbarLink>
         </div>
     <div className='flex flex-col space-y-[18px] ml-2 pb-5'>
      <span className='text-[18px] text-[#B3B3B3]'>Chill Mix</span>
      <span className='text-[18px] text-[#B3B3B3]'>Insta Hits </span>
      <span className='text-[18px] text-[#B3B3B3]'>Your Top Songs 2021 </span>
      <span className='text-[18px] text-[#B3B3B3]'>Mellow Songs </span>
      <span className='text-[18px] text-[#B3B3B3]'>Anime Lofi & Chillhop Music </span>
      <span className='text-[18px] text-[#B3B3B3]'>BG Afro “Select” Vibes </span>
      <span className='text-[18px] text-[#B3B3B3]'>Happy Hits! </span>
      <span className='text-[18px] text-[#B3B3B3]'>Deep Focus </span>
      <span className='text-[18px] text-[#B3B3B3]'>Instrumental Study </span>
      <span className='text-[18px] text-[#B3B3B3]'>OST Compilations </span>
      <span className='text-[18px] text-[#B3B3B3]'>Nostalgia for old souled mill... </span>
     </div>
     </div>
     <div  className='w-[58%] h-[100vh] overflow-auto homepage pb-[120px]'>
     <Routes>
       <Route path='/' element={<Home artist={artist} title={title} setTitle={setTitle} album={album} setAlbum={setAlbum} albumList={albumList} setAlbumList={setAlbumList}/>}/>
       <Route path='/playlist' element={<PlayList/>}/>
       <Route path='/library' element={<Library/>}/>
       <Route path='/liked' element={<Liked/>}/>
       <Route path='/search' element={<Search/>}/>
     </Routes>
     </div>
     <div className='w-[20%] pt-[29px] px-[20px] overflow-auto'>
      <div className='flex items-center justify-between mb-[39px]'>
        <h3 className='text-[#CCCCCC] text-[18px] font-bold'>Friend Activity</h3>
        <div className='flex items-center space-x-[16px]'>
          <img src={Union} alt="icom" width={13} height={16} />
          <img src={XX} alt="icon" width={15} height={15}/>
        </div>
      </div>
      <p className='text-[#CCCCCC] text-[14px]'>Let friends and followers on Spotify see what you’re listening to.</p>
      <div className='mt-[23px] space-y-[20px] flex flex-col'>
        <img src={frame} alt="img" width={150} height={40}/>
        <img src={frame} alt="img" width={150} height={40}/>
        <img src={frame} alt="img" width={150} height={40}/>
      </div>
      <p className='text-[#CCCCCC] text-[14px] mt-[21px]'>Go to Settings Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
     <button className='text-[#171717] text-[15px] font-bold mt-[20px] w-[166px] pt-[13px] pb-[12px] rounded-[40px] bg-white'>SETTINGS</button>
     </div>
  </div>
  )
}

export default App1
