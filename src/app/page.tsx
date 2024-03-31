import CardProducto from '@/components/CardProducto/CardProducto';
import Header from '@/components/Header/Header';
import data from '@/model/data';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <div className=" flex gap-10 px-10 py-8 flex-wrap justify-center">
        {data.map((elemento, index) => (
          <CardProducto
            productImage={elemento.productImage}
            productName={elemento.productName}
            productPrice={elemento.productPrice}
          />
        ))}
      </div>
    </div>
  );
}
