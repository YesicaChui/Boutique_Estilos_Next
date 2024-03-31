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
    <div className="bg-white w-[300px] rounded-lg flex flex-col items-center p-6 gap-3 justify-between cursor-pointer transition-transform duration-300 hover:scale-110 shadow-lg">
    
     <div className='flex flex-col gap-3 items-center'>
        <Image
          src={productImage}
          alt=""
          height={200}
          width={400}
          className="rounded-md"
        />
        <p className="text-2xl font-bold">{productPrice}</p>
       
     </div>
     <p className="text-base font-bold">{productName}</p>
    </div>
  );
};

export default CardProducto;
