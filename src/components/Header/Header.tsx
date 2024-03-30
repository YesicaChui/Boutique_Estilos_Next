import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Header = () => {
  return (
    <header className='flex justify-between pt-5 px:-1 md:px-10 items-center'>
    <div className='flex items-center gap-5'>
    <img src='ngl.jpg' alt="logo de la empresa" width={"80px"} />

    </div>   

    <nav className='hidden md:flex justify-between gap-10 ' role="navigation">

      <p  className='font-bold text-2xl'>Tienda</p>
      
    </nav>
    <div className='flex justify-between gap-10 items-center'>      
      <CartWidget />
    </div>
  </header>
  )
}

export default Header