import React from 'react'
import { NavLink } from 'react-router-dom/dist'

function NavbarLink({children,title,url}) {
  return (
    <NavLink className={'flex items-center space-x-[20px]  transition-[0.4s] hover:bg-[#474545] rounded-md w-[80%] p-2 text-[18px] font-bold text-white'} to={url}>
      {children}
      <span>{title}</span>
    </NavLink>
  )
}

export default NavbarLink