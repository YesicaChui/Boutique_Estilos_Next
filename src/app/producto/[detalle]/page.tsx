import data from '@/model/data';
import Image from 'next/image';
import React from 'react';

type ColorCodes = {
  [key: string]: string;
};
const DetallePage = () => {
  const colorCodes: ColorCodes = {
    blanco: '#FFFFFF',
    negro: '#000000',
    celeste: '#ACE5EE',
    azul: '#0000FF',
    naranja: '#FFA500',
    rosado: '#FFC0CB',
    verde: '#008000',
    gris: '#808080',
    rojo: '#FF0000',
    amarillo: '#FFFF00',
  };
  function getColorCode(colorName: string): string  {
    return colorCodes[colorName];
  }

  return (
    <div className="p-8 flex gap-10 justify-center">
      <Image
        src={data[0].productImage}
        width={500}
        height={500}
        alt="Producto"
        className="rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
      />
      <div className="flex flex-col gap-6 w-[600px]">
        <div className="flex gap-3">
          <p className="text-base text-[#828282] font-bold">codigo</p>
          <p className="text-[#828282] font-bold">{data[0].id}</p>
        </div>
        <p className="text-4xl font-bold">{data[0].productName}</p>
        <p className="text-3xl font-bold">{data[0].productPrice}</p>
        <p className="text-xl font-bold">Talla</p>
        <div className="flex gap-10 ">
          {data[0].sizes.map((elemento, index) => (
            <div className="text-[#828282] font-bold" key={index}>
              {elemento}
            </div>
          ))}
        </div>
        <p className="text-xl font-bold">Colores</p>
        <div className="flex gap-10">
          {data[0].colors.map((elemento, index) => (
            <div className="text-[#828282] capitalize font-bold flex flex-col items-center gap-3" key={index}>
              {elemento}
              <div className='w-8 h-8  rounded-full' style={{backgroundColor:getColorCode(elemento)}}></div>
            </div>
          ))}
        </div>
        <p className="text-xl font-bold">Descripción</p>
        <p className="text-[#828282] font-semibold">{data[0].description}</p>
      </div>
    </div>
  );
};

export default DetallePage;
