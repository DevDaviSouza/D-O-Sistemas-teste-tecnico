"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type FipeContextType = {
  tipoVeiculo: string,
  idMarca: number,
  idModelo: number
  idAno: number
}

const FipeContext = createContext<FipeContextType | undefined>(undefined)

export function FipeProvider({children} : {children: React.ReactNode}) {
  const [tipoVeiculo, setTipoVeiculo] = useState("")
  const [idMarca, setIdMarca] = useState(0)
  const [idModelo, setIdModelo] = useState(0)
  const [idAno, setIdAno] = useState(0)


  return( 
    <FipeContext.Provider value={{tipoVeiculo, idMarca, idModelo, idAno}}>
      {children}
    </FipeContext.Provider>
  )
}