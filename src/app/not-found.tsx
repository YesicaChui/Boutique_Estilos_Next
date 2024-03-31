import Link from 'next/link';
import React from 'react';
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-36">
      <div className="flex items-center gap-3">
        <p className="text-5xl font-bold">404</p>
        <p className="text-5xl font-semibold">Página no encontrada </p>
      </div>
      <p className="text-3xl">La página que ha solicitado no existe.</p>
      <Link href={'/'}>
        <p className="text-2xl text-[#C7B198] font-bold ">Continuar con la compra</p>
      </Link>{' '}
    </div>
  );
};

export default NotFound;
