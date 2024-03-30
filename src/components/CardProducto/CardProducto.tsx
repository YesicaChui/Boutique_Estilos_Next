import Image from "next/image";
import React from "react";

const CardProducto = () => {
  return (
    <div className="bg-[#F3F4ED] w-[300px] rounded-lg flex flex-col items-center p-6 gap-3 ">
      <p className="text-base font-bold">Chompa Mujer Close Rosado Lavanda</p>
      <Image
        src="https://topitop.vteximg.com.br/arquivos/ids/344466-1000-1248/1998469_1.jpg?v=638449841043800000"
        alt=""
        height={400}
        width={200}
        className="rounded-md"
      />
      <p className="text-2xl font-bold">S/ 49.95</p>
      <button className="border w-[80%] rounded-lg py-2 bg-[#596E79] text-white font-semibold text-base">
        Ver detalle{" "}
      </button>
    </div>
  );
};

export default CardProducto;
