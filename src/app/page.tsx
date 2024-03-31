import CardProducto from '@/components/CardProducto/CardProducto';
import Header from '@/components/Header/Header';
import data from '@/model/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className=" flex gap-10 px-10 py-8 flex-wrap justify-center">
        {data.map((elemento, index) => (
         <Link href={`/producto/${elemento.id}`}>
            <CardProducto
            key={index}
              productImage={elemento.productImage}
              productName={elemento.productName}
              productPrice={elemento.productPrice}
            />
         </Link>
        ))}
      </div>
    </div>
  );
}
