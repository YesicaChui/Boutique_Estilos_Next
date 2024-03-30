import CardProducto from "@/components/CardProducto/CardProducto";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Header/>
    <div className="px-10 py-8">
    <CardProducto/>
    </div>
   </div>
  );
}
