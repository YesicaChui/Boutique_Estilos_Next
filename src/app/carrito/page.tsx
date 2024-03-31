import CardCarrito from '@/components/CardCarrito/CardCarrito';
import Image from 'next/image';
import React from 'react';

const CartPage = () => {
  return (
    <div className=" p-8">
      <div className="flex justify-between py-3">
        <div className="flex items-center">
          <Image src={'/chevron-left.png'} alt="" height={50} width={50} />
          <p className="text-base font-bold text-[#484848]">Continuar Comprando</p>
        </div>
        <p></p>
      </div>
      <div className="flex py-5 gap-3">
        <div className="flex flex-col gap-5 w-[75%] ">
          <p className="text-4xl font-bold">Mi carrito S/. 556.00 PEN</p>
          <CardCarrito/>
          
        </div>
        <div >
          <p className="text-4xl font-bold text-[#484848]">
            4 artículos en tu carrito de compras
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
