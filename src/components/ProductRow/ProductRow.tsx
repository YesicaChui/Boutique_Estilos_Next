import React from 'react'
interface ProductRowProps {
  id:number
  productName:string
  productImg:string 
  productPrice:string 
  description: string 
  sizes:Array<string>
  colors:Array <string>
  category:string 
}
const ProductRow = (props:ProductRowProps) => {
  const {id, productName, productImg, productPrice, description, sizes, colors, category} = props
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td scope="row" className="px-2 py-4 text-center">
              {id}
            </td>
            <td className="px-2 py-4 ">
              <img width={50} src={productImg} alt="" />
            </td>
            <td className="px-2 py-4">{productName}</td>
            <td className="px-2 py-4">{productPrice}</td>
            <td className="px-2 py-4">{category}</td>
            <td className="px-2 py-4 w-[30%]">{description}</td>
            <td className="px-2 py-4 ">{colors.join(", ")}</td>
            <td className="px-2 py-4 ">{sizes.join(", ")}</td>

            <td className="px-2 py-4 text-center  w-[100px]">
              <button
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                ✏´Editar
              </button>
              <br />
              <br />
              <button
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                🗑Borrar
              </button>
            </td>
          </tr>
  )
}

export default ProductRow