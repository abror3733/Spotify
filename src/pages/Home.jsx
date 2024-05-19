import React, { useState, useRef } from 'react';
import ArrowR from '../assets/Images/arrowR.svg';
import ArrowL from '../assets/Images/arrowL.svg';
import ArtistList from '../components/ArtistList/ArtistList';

function Home({ artist ,title,setTitle,album,setAlbum,setAlbumList,albumList}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const goToPrevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? artist.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === artist.length - 1 ? 0 : prevIndex + 1));
  };

  const handleArrowClick = (direction) => {
    if (direction === 'prev') {
      goToPrevSlide();
    } else {
      goToNextSlide();
    }
  };

  const handleSlideChange = (event) => {
    const newIndex = parseInt(event.target.value, 10);
    setCurrentIndex(newIndex);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = newIndex * carouselRef.current.offsetWidth;
    }
  };

  const handleArrowClick1 = (direction) => {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return; 
  
    const scrollAmount = 200; 
  
    if (direction === 'prev') {
      carousel.scrollLeft -= scrollAmount; 
    } else if (direction === 'next') {
      carousel.scrollLeft += scrollAmount; 
    }
  };
  
  const handleChange = (e)=>{
    setTitle(e.target.value);
  }
   const artistSlice =artist.slice(0,8)
   const albumListSlice =albumList.slice(0,8)

   const handleAlbumChange = (e)=>{
    setAlbum(e.target.value)
   }


  return (
    <div className='bg-[#121212] homepage px-[30px] pt-[20px] overflow-auto h-[100vh]'>
      <div className='flex items-center space-x-[22px] mb-[30px]'>
        <img className='cursor-pointer' src={ArrowL} alt="arrow" width={40} height={40}  />
        <img className='cursor-pointer' src={ArrowR} alt="arrow" width={40} height={40}  />
      </div>
      <h2 className='text-[#FFFFFF] text-[39px] font-bold pb-[180px]'>Good afternoon</h2>
       
      <div className=' text-white px-[30px] pt-10 mx-auto'>
      <input onChange={handleChange} value={title} className='p-3 w-[100%] border-[1px] outline-none  border-slate-300 bg-transparent rounded-md text-white' type="text" placeholder='Searching music...'/>
      </div>
      
      <div className='flex flex-wrap justify-between items-center gap-5 mt-10'>
        {artistSlice.length ? artistSlice.map(item=> (
          <ArtistList item={item}/>))
        :
         <div className='pt-[200px]'></div>
        }
      </div>
      <div className=' text-white px-[30px] pt-[100px] mx-auto'>
      <input onChange={handleAlbumChange} value={album}  className='p-3 w-[100%] border-[1px] outline-none  border-slate-300 bg-transparent rounded-md text-white' type="text" placeholder='Searching album...'/>
      </div>
      <div className='flex flex-wrap justify-between items-center gap-5 mt-10'>
        { albumListSlice.map(item=> (
          <ArtistList item={item}/>))
        }
      </div>
     <div className='mt-[100px]'>
      <div className='carousel' ref={carouselRef}>
        {albumList.map((item, index) => (
          <div  key={index} className={`carousel-item duration-150 ${index === currentIndex ? 'active' : ''}`}>
            <ArtistList item={item} />
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <input type="range" min="0" max={artist.length - 1} value={currentIndex} onChange={handleSlideChange} />

      </div>
      <div className='flex items-center justify-center mx-auto  space-x-[100px] mt-5'>
        <img className='cursor-pointer  ' src={ArrowL} alt="arrow" width={40} height={40} onClick={() => handleArrowClick1('prev')} />
        <img className='cursor-pointer ' src={ArrowR} alt="arrow" width={40} height={40} onClick={() => handleArrowClick1('next')} />
      </div>
     </div>
    </div>
  );
}

export default Home;
