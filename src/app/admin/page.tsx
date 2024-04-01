import ProductRow from '@/components/ProductRow/ProductRow';
import data from '@/model/data';
import React from 'react';

const AdminPage = () => {
  return (
    <div>
      <button className="bg-red-200">Nuevo Producto</button>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-2 py-3 text-center">
              Code
            </th>
            <th scope="col" className="px-2 py-3 text-center">
              Imagen
            </th>
            <th scope="col" className="px-2 py-3 text-center">
              Nombre
            </th>
            <th scope="col" className="px-2 py-3 text-center">
              Precio S/.
            </th>
            <th scope="col" className="px-2 py-3 text-center">
              Categoria
            </th>
            <th scope="col" className="px-2 py-3 text-center">
              Descripción
            </th>
            <th scope="col" className="px-2 py-3 text-center">
              Colores
            </th>
            <th scope="col" className="px-2 py-3 text-center">
              Tallas
            </th>

            <th scope="col" className="px-2 py-3 text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento, index) => (
            <ProductRow
              id={elemento.id}
              category={elemento.category}
              colors={elemento.colors}
              description={elemento.description}
              productImg={elemento.productImage}
              productName={elemento.productName}
              productPrice={elemento.productPrice}
              sizes={elemento.sizes}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
