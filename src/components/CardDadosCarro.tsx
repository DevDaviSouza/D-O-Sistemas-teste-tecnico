"use client"

import { useFIpe } from "@/context/FipeContext"

export const CardDadosCarro = () => {

    const { setIdMarca, setIdModelo, listaMarcas, listaModelos, listaAnos } = useFIpe()
    
  return (
    <div className="flex flex-col bg-gray-500 p-7 w-full  rounded-2xl items-center justify-center gap-5 text-white">
      <h1 className=" text-2xl font-bold">Encontre seu veículo:</h1>

      <form className="flex flex-col gap-7 w-full">
        <div>
          <label className="flex flex-col">
            Marcas/Montadoras:
            <select onChange={(e) => setIdMarca(e.target.value) } className="bg-gray-300 text-black p-2 rounded" name="Marcas/Montadoras" >
              <option value="">Selecione uma marca de veículo</option>
            {
              listaMarcas.map(marca => (
                  <option key={marca.code} value={marca.code}>{marca.name}</option>
              ))
              
            }
            </select>
          </label>
        </div>

        <div>
          <label className="flex flex-col">
            Modelos:
            <select onChange={(e) => setIdModelo(e.target.value)} className="bg-gray-300 text-black p-2 rounded" name="Modelos">
              <option value="">Selecione um modelo de veículo</option>
              {
                listaModelos.map(modelo => (
                  <option key={modelo.code} value={modelo.code}>{modelo.name}</option>
                ))
              }
            </select>
          </label>
        </div>

        <div className="flex w-full">
          <label className="flex flex-col">
            Ano:
            <select className="bg-gray-300 text-black p-2 rounded " name="Ano">
              <option value="">Selecione o ano do veículo</option>
             {
              
             }
            </select>
          </label>
        </div>
      </form>

      <div className="flex flex-row gap-7 w-full items-center justify-center">
        <button className="bg-red-800 rounded-2xl py-2 w-2/6">Limpar busca</button>
        <button className="bg-green-800 rounded-2xl py-2 w-2/6">Buscar informações</button>
      </div>
    </div>
  )
}