//Passando a renderização para o lado do client para acessar funcionalidades React.
"use client"

import { useFIpe } from "@/context/FipeContext"
import InputRetorno from "../moleculas/InputRetorno"

const CardFipe = () => {
  //Puxando funções e estados do contexto
  const { idMarca, idModelo, idAno, listaMarcas, listaModelos, listaAnos, buscaFipe, infoVeiculo} = useFIpe()
  
  return(
    <div className="flex flex-col bg-gray-100 p-7  rounded-2xl items-center justify-center gap-5 text-black shadow-2xl">
      <h1 className=" text-xl lg:text-2xl font-bold text-center">Informações da tabela FIPE:</h1>

      {/* Selecionando inputs e adicionando seus values com base no componente InputRetorno */}
      <form className="flex flex-col gap-7">
        <div className="flex flex-col md:flex-row gap-7">
          <InputRetorno 
          InfoVeiculo={{
            label: "Modelo:",
            content: infoVeiculo.model
          }} 
          />
          
          <InputRetorno 
          InfoVeiculo={{
            label: "Marca:",
            content: infoVeiculo.brand
          }} 
          />
        </div>

        <div className="flex flex-col md:flex-row gap-7">
          <InputRetorno 
          InfoVeiculo={{
            label: "Ano:",
            content: infoVeiculo.modelYear
          }} 
          />

          <InputRetorno 
          InfoVeiculo={{
            label: "Combustível:",
            content: infoVeiculo.fuelAcronym
          }} 
          />
        </div>
        
        <div className="flex flex-col md:flex-row md gap-7">
          <InputRetorno 
          InfoVeiculo={{
            label: "Cód. FIPE:",
            content: infoVeiculo.codeFipe
          }} 
          />

          <InputRetorno 
          InfoVeiculo={{
            label: "Preço de tabela:",
            content: infoVeiculo.price
          }} 
          />
        </div>
      </form>
    </div>
  )
}

export default CardFipe