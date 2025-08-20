"use client"

import { useFIpe } from "@/context/FipeContext"

const CardFipe = () => {
  
  const { idMarca, idModelo, idAno, listaMarcas, listaModelos, listaAnos, buscaFipe, infoVeiculo} = useFIpe()
  
  return(
    <div className="flex flex-col bg-gray-500 p-7 rounded-2xl items-center justify-center gap-5 text-white">
      <h1 className=" text-2xl font-bold">Informações da tabela FIPE:</h1>

      <section className="flex flex-col gap-7">
        <div>
          <label className="flex flex-col">
            Modelo:
            <input className="bg-gray-300 p-2 rounded text-black" value={infoVeiculo.model} type="text" disabled/>
          </label>
        </div>

        <div className="flex flex-row gap-7">
          <label className="flex flex-col">
            Marca:
            <input className="bg-gray-300 text-black p-2 rounded w-36" value={infoVeiculo.brand} type="text" disabled/>
          </label>
          
          <label className="flex flex-col">
            Ano:
            <input className="bg-gray-300 text-black p-2 rounded w-36" value={infoVeiculo.modelYear} type="text" disabled/>
          </label>

          <label className="flex flex-col">
            Combustível:
            <input className="bg-gray-300 text-black p-2 rounded w-36" value={infoVeiculo.fuelAcronym} type="text" disabled/>
          </label>
        </div>
        
        <div className="flex flex-row gap-7">
          <label className="flex flex-col">
            Cód. FIPE:
            <input className="bg-gray-300 text-black p-2 rounded" value={infoVeiculo.codeFipe} type="text" disabled/>
          </label>

          <label className="flex flex-col">
            Preço de tabela:
            <input className="bg-gray-300 text-black p-2 rounded" value={infoVeiculo.price} type="text" disabled/>
          </label>
        </div>
      </section>
    </div>
  )
}

export default CardFipe