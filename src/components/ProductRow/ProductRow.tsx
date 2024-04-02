import React from 'react';
interface ProductRowProps {
  id: number;
  productName: string;
  productImg: string;
  productPrice: string;
  description: string;
  sizes: Array<string>;
  colors: Array<string>;
  category: string;
}
const ProductRow = (props: ProductRowProps) => {
  const { id, productName, productImg, productPrice, description, sizes, colors, category } =
    props;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td scope="row" className="px-2 py-4 text-center text-black">
        {id}
      </td>
      <td className="px-2 py-4 ">
        <img width={80} src={productImg} alt="" className="rounded-md" />
      </td>
      <td className="px-2 py-4">{productName}</td>
      <td className="px-2 py-4">{productPrice}</td>
      <td className="px-2 py-4 capitalize">{category}</td>
      <td className="px-2 py-4 w-[30%]">{description}</td>
      <td className="px-2 py-4 capitalize">{colors.join(', ')}</td>
      <td className="px-2 py-4 ">{sizes.join(', ')}</td>

      <td className="px-2 py-4 text-center  w-[100px]">
        <button className="font-medium text-[#596E79] hover:underline border border-[#596E79] flex justify-center items-center p-1 rounded-md cursor-pointer shadow">
          ✏ Editar
        </button>
        <br />
        <br />
        <button className="font-medium text-black hover:underline border border-[#831114] flex justify-center items-center p-1 rounded-md cursor-pointer shadow">
          🗑 Borrar
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
