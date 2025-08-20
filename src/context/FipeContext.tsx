"use client";

import React, { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from "react"
import { marca, modelos, anoModelo, infoFipe } from "@/services/api/FipeService";
import MarcaVeiculo from "@/utils/MarcaVeiculo";
import ModeloVeiculo from "@/utils/ModeloVeiculo";
import AnosVeiculo from "@/utils/AnosVeiculo";

type FipeContextType = {
  tipoVeiculo: string,
  setTipoVeiculo: Dispatch<SetStateAction<string>>,
  idMarca: string,
  setIdMarca: Dispatch<SetStateAction<string>>,
  listaMarcas: MarcaVeiculo[],
  idModelo: string, 
  setIdModelo: Dispatch<SetStateAction<string>>,
  listaModelos: ModeloVeiculo[],
  idAno: string,
  listaAnos: AnosVeiculo[]
}

const FipeContext = createContext<FipeContextType | undefined>(undefined)

export function FipeProvider({children} : {children: React.ReactNode}) {
  const [tipoVeiculo, setTipoVeiculo] = useState("")
  const [idMarca, setIdMarca] = useState("")
  const [listaMarcas, setListaMarcas] = useState<MarcaVeiculo[]>([]);
  const [idModelo, setIdModelo] = useState("")
  const [listaModelos, setListaModelos] = useState<ModeloVeiculo[]>([])
  const [idAno, setIdAno] = useState("")
  const [listaAnos, setListaAnos] = useState<ModeloVeiculo[]>([])

  useEffect(() => {
    buscaMarca()
  }, [])

  useEffect(() => {
    if (idMarca) {
      buscaModelos()
      console.log(listaModelos);
    }
  
  },[idMarca])

  useEffect(() => {

  }, [])

  const buscaMarca = async () => {
    try{
      const response = await marca();
      setListaMarcas(response.data)

    } catch(error) {
      console.error("erro ao listar marcas de veículos")
    }
  }

  const buscaModelos = async () => {
    try {
      const response = await modelos(idMarca)
      setListaModelos(response.data)
    } catch (error) {
      console.error("erro ao buscar modelos")
    }
  }

  const buscaAno = async () => {
    try {
      const response = await anoModelo(idMarca, idModelo)
      setListaAnos(response.data)
    } catch (error) {
      console.error("erro ao buscar anos do veículo")
    }
  }

  return( 
    <FipeContext.Provider value={{tipoVeiculo, setTipoVeiculo, idMarca, setIdMarca, listaMarcas, idModelo, setIdModelo, listaModelos, idAno, listaAnos}}>
      {children}
    </FipeContext.Provider>
  )
}

export const useFIpe = () => {
  const context = useContext(FipeContext);

  if (!context) {
    throw new Error("useFipe deve ser usado dentro de um FipeProvider!");
  }

  return context
}