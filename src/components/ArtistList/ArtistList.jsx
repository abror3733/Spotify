import React from 'react'

function ArtistList({item}) {
  return (
    <div key={item.uri.id} className='bg-[#1B1B1B] w-[160px] h-[235px] rounded-md px-[12px] pt-[12px]'>
      <img src={item.img} alt="img" width={135} height={135}/>
      <h2 className='text-white text-[14px] font-bold mt-2'>{item.name}</h2>
      <p className='text-[#B3B3B3] text-[12px]'>{item.uri.name}</p>
    </div>
  )
}

export default ArtistList