"use client"

import { useFIpe } from "@/context/FipeContext"

export const CardDadosCarro = () => {

    const { setIdMarca, setIdModelo, setIdAno, listaMarcas, listaModelos, listaAnos, buscaFipe} = useFIpe()
    
  return (
    <div className="flex flex-col bg-gray-100 p-7  rounded-2xl items-center justify-center gap-5 text-black shadow-2xl">
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

        <div className="">
          <label className="flex flex-col">
            Ano:
            <select onChange={(e) => setIdAno(e.target.value)} className="bg-gray-300 text-black p-2 rounded " name="Ano">
              <option value="">Selecione o ano do veículo</option>
             {
              listaAnos.map(anos => (
                <option key={anos.code} value={anos.code}>{anos.name}</option>
              ))
             }
            </select>
          </label>
        </div>
      </form>
    </div>
  )
}