import CardCarrito from '@/components/CardCarrito/CardCarrito';
import data from '@/model/data';
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
          <CardCarrito
            category={data[0].category}
            img={data[0].productImage}
            name={data[0].productName}
            price={data[0].productPrice}
          />
          <CardCarrito
            category={data[4].category}
            img={data[4].productImage}
            name={data[4].productName}
            price={data[4].productPrice}
          />
          <CardCarrito
            category={data[10].category}
            img={data[10].productImage}
            name={data[10].productName}
            price={data[10].productPrice}
          />
          <CardCarrito
            category={data[15].category}
            img={data[15].productImage}
            name={data[15].productName}
            price={data[15].productPrice}
          />
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-4xl font-bold text-[#484848]">
            4 artículos en tu carrito de compras
          </p>
          <div className="border"></div>
          <div className="flex justify-between">
            <p className="text-lg font-semibold ">
              Dela las instrucciones especiales a continuación:
            </p>
            <p className="text-2xl font-bold text-[#929292]">+</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-bold text-[#929292]">Subtotal</p>
            <div className="text-lg font-bold text-[#929292]">S/. 556.00 PEN</div>
          </div>
          <div className="border"></div>
          <div className="flex justify-between ">
            <p className="text-lg font-bold">Total</p>
            <p className="text-2xl font-bold">S/. 556.00</p>
          </div>
          <div className="flex justify-between">
            <div></div>
            <p className="text-white font-semibold text-xl bg-[#596E79] rounded-md p-3 text-center w-[50%] ">
              Página de pago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
