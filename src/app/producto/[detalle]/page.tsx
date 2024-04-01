import data from '@/model/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

type ColorCodes = {
  [key: string]: string;
};
interface DetallePageProps {
  params: Record<string, string | string[]>;
}
const DetallePage = ({ params }: DetallePageProps) => {
  const { detalle } = params;
  console.log(detalle);

  const producto = data.find((elemento) => elemento.id === Number(detalle));

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
  function getColorCode(colorName: string): string {
    return colorCodes[colorName];
  }

  if (!producto) {
    return notFound();
  }

  return (
    <div className="p-8 flex gap-10 justify-center">
      <Image
        src={producto.productImage}
        width={500}
        height={500}
        alt="Producto"
        className="rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
      />
      <div className="flex flex-col gap-6 w-[600px]">
        <div className="flex gap-3">
          <p className="text-base text-[#828282] font-bold">codigo</p>
          <p className="text-[#828282] font-bold">{producto.id}</p>
        </div>
        <p className="text-4xl font-bold">{producto.productName}</p>
        <p className="text-3xl font-bold">S/. {producto.productPrice}</p>
        <p className="text-xl font-bold">Talla</p>
        <div className="flex gap-10 ">
          {producto.sizes.map((elemento, index) => (
            <div className="text-[#828282] font-bold" key={index}>
              {elemento}
            </div>
          ))}
        </div>
        <p className="text-xl font-bold">Colores</p>
        <div className="flex gap-10">
          {producto.colors.map((elemento, index) => (
            <div
              className="text-[#828282] capitalize font-bold flex flex-col items-center gap-3"
              key={index}>
              {elemento}
              <div
                className="w-8 h-8  rounded-full"
                style={{ backgroundColor: getColorCode(elemento) }}></div>
            </div>
          ))}
        </div>
        <p className="text-xl font-bold">Descripción</p>
        <p className="text-[#828282] font-semibold">{producto.description}</p>
        <p className="cursor-pointer mt-[57px] text-white font-semibold text-xl bg-[#596E79] rounded-md p-3 text-center w-[50%] ">
          Agregar al carrito
        </p>
      </div>
    </div>
  );
};

export default DetallePage;
