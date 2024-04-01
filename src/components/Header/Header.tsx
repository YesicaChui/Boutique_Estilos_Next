import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between pt-5 px:-1 md:px-10 items-center">
      <div className="flex items-center gap-5">
        <Link href={'/'}>
          <Image src="/ngl.jpg" alt="logo de la empresa" width={80} height={80} />
        </Link>
      </div>

      <nav className="hidden md:flex justify-between gap-10 " role="navigation">
        <Link href={'/'}><p className="font-bold text-2xl">Tienda</p></Link>
        <Link href={'/admin'}><p className="font-bold text-2xl">Administracion</p></Link>
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
