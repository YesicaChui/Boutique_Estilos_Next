import Image from 'next/image';
import React from 'react';
interface CardCarritoProps {
  img: string;
  name: string;
  category: string;
  price: string;
}
const CardCarrito = (props: CardCarritoProps) => {
  const { img, name, category, price } = props;
  return (
    <div className="border border-[#c6c6c6] py-2 px-4 w-[100%] rounded-md shadow relative">
      <p className="font-semibold text-3xl absolute right-5 text-[#797979]">x</p>
      <div className="flex gap-3 ">
        <Image src={img} alt="" height={160} width={160} className="rounded-md" />
        <div className="flex justify-between flex-1 items-center gap-3">
          <div className='w-[30%]'>
            <p className="text-lg text-[#484848] font-bold">{name}</p>
            <p className="text-base text-[#484848] font-semibold">{category}</p>
          </div>
          <p className="text-xl font-medium">S/. {price}</p>
          <div className="flex gap-10 border border-[#c6c6c6] justify-between items-center p-3 rounded-md">
            <p className=" text-4xl text-[#797979]">-</p>
            <p className="font-bold text-xl">2</p>
            <p className="font-bold text-3xl text-[#797979]">+</p>
          </div>
          <p className="text-xl font-medium">S/. 388.00</p>
        </div>
      </div>
    </div>
  );
};

export default CardCarrito;
