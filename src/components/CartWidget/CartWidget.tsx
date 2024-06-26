import Image from 'next/image'
import React from 'react'

const CartWidget = () => {
  return (
    <div className='flex relative' aria-label="Carrito de compras">
    <Image src='/carrito.png' alt="icono del carrito de compras" width={32} height={32} />
    <div className='bg-red-500 rounded-full p-1 text-white font-bold flex items-center justify-center w-5 h-5 absolute top-[-10px] right-[-12px]'>
      <p>2</p>
    </div>
  </div>
  )
}

export default CartWidget