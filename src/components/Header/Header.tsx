import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between py-4 pl-3 pr-5 items-center bg-white shadow">
      <div className="flex items-center gap-5">
        <Link href={'/'}>
          <Image src="/logo_estilos.png" alt="logo de la empresa" width={100} height={100} />
        </Link>
      </div>

      <nav className="flex justify-between gap-[200px]">
        <Link href={'/'}><p className="font-bold text-lg ">Tienda</p></Link>
        <Link href={'/admin'}><p className="font-bold text-lg">Administracion</p></Link>
      </nav>
      <Link href={'/carrito'}>
        <div className="flex justify-between gap-10 items-center">
          <CartWidget />
        </div>
      </Link>
    </header>
  );
};

export default Header;
