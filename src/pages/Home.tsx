import { IoMdMenu } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { CarouselCustom } from "../components/CarouselCustom";
import { FaCheck } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";

export function Home() {
  const [voltagem, setVoltagem] = useState<"110V" | "220V">("220V");
  const handleVoltagemChange = (newVoltagem: "110V" | "220V") => {
    setVoltagem(newVoltagem);
  };

  return (
    <div className="flex flex-col text-black">
      <div className="flex flex-row justify-between items-center bg-[rgb(31,36,40)] px-2 py-2 text-white text-3xl">
        <button>
          <IoMdMenu />
        </button>
        <a>
          <img className="h-[32px]" src="/logo.png" alt="Logo" />
        </a>
        <a>
          <MdShoppingBag />
        </a>
      </div>
      <div className="flex flex-row bg-[rgb(31,36,40)] px-2 py-1">
        <input
          type="text"
          placeholder="Busca no Magalu"
          className="rounded-md w-full px-2 py-3 outline-none font-light text-sm"
        />
        <button className="text-gray-600 text-xl -ml-6">
          <IoIosSearch />
        </button>
      </div>
      <div className="arco-iris h-[3px]" />
      <div className="flex p-2 items-center flex-row gap-2 bg-[rgb(53,59,63)] text-[#e4e4e4] text-sm cursor-pointer">
        <SlLocationPin />
        <p>Ver ofertas para minha região</p>
      </div>
      <div className="px-2 py-1 overflow-hidden text-nowrap ">
        <a className="text-[12px] font-extralight cursor-pointer text-gray-700">
          <span className="text-blue-500">Home</span>
          {
            "  >  Eletroportáteis  >  Fritadeira sem Óleo / Air Fryer  >  Fritadeira Elétrica sem Óleo/Air Fryer Mondial Family AFN-40-BI Preto 4L com Timer"
          }
        </a>
      </div>

      <div className="flex justify-center items-center py-4 relative">
        <CarouselCustom />
      </div>
      <div>
        <div className="inline-flex m-4 px-2 py-1 gap-1 justify-start items-center bg-black text-white rounded-md font-semibold text-xs ">
          <span>magalu indica </span>
          <FaCheck />
        </div>
      </div>
      <div className="flex mx-4">
        <p className="text-lg font-light ">
          Fritadeira Elétrica sem Óleo/Air Fryer Mondial Family AFN-40-BI Preto
          4L com Timer
        </p>
      </div>
      <div className="px-4 flex flex-row justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="flex space-x-1 text-yellow-700 text-md">
            <i className="fas fa-star sha"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className="font-light text-sm text-gray-600">{"4.8 (13060)"}</p>
        </div>
        <div className="flex gap-1 text-[2.8rem] text-gray-900">
          <CiShare2 className="bg-gray-300 rounded-full p-2" />
          <CiHeart className="bg-gray-300 rounded-full p-2" />
        </div>
      </div>
      <div className="w-[100px] flex flex-col p-4 justify-start items-start gap-1">
        <p className="text-sm text-gray-700">Cor Preto</p>
        <img
          src="imagem2.webp"
          alt="image 2"
          className="border-2 border-blue-500 rounded-md py-2 object-cover object-center md:object-contain"
        />
      </div>
      <div className="flex flex-col px-4 gap-2">
        <p key={voltagem} className="text-sm text-gray-700">
          Voltagem {voltagem}
        </p>
        <div className="flex gap-3 font-light text-sm">
          <button
            aria-pressed={voltagem === "110V"}
            className={`rounded-3xl p-2 border border-gray-300 ${
              voltagem === "110V" && "bg-blue-500 text-white"
            }`}
            onClick={() => handleVoltagemChange("110V")}
          >
            110V
          </button>
          <button
            aria-pressed={voltagem === "220V"}
            className={`rounded-3xl p-2 border border-gray-300 ${
              voltagem === "220V" && "bg-blue-500 text-white"
            }`}
            onClick={() => handleVoltagemChange("220V")}
          >
            220V
          </button>
        </div>
      </div>
      <div className="py-2 px-4">
        <p className="text-md text-gray-700">Vendido e entregue por Magalu</p>
      </div>
      <div className="flex border-t justify-between border-gray-300 sticky bottom-0 bg-white p-2">
        <div className="font-light text-gray-800 text-md">
          <p>
            <span className="font-bold">R$ 262,26</span> no Pix
          </p>
          <p>ou 4x de R$ 69,75</p>
        </div>
        <a
          className="text-center h-full px-4 py-2 bg-green-500 rounded-md text-white font-bold"
          href="https://www.google.com"
        >
          Comprar
        </a>
      </div>
    </div>
  );
}
