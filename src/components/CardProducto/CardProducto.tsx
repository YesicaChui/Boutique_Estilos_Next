import Image from 'next/image';
import React from 'react';
interface CardProductoProps {
  productName: string;
  productImage: string;
  productPrice: string;
}
const CardProducto = (props: CardProductoProps) => {
  const { productImage, productName, productPrice } = props;
  return (
    <div className="bg-[#F3F4ED] w-[300px] rounded-lg flex flex-col items-center p-6 gap-3 justify-between ">
      <p className="text-base font-bold">{productName}</p>
     <div className='flex flex-col gap-3 items-center'>
        <Image
          src={productImage}
          alt=""
          height={400}
          width={200}
          className="rounded-md"
        />
        <p className="text-2xl font-bold">{productPrice}</p>
        <button className="border w-full rounded-lg py-2 bg-[#596E79] text-white font-semibold text-base">
          Ver detalle{' '}
        </button>
     </div>
    </div>
  );
};

export default CardProducto;
