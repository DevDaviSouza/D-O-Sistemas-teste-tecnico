import ApiClient from "./ApiClient";

// Endpoints utilizados
export const marca = () => 
  ApiClient.get(`/cars/brands`)

export const modelos = ( marca: string) => 
  ApiClient.get(`/cars/brands/${marca}/models`)

export const anoModelo = ( marca: string, modelo: string) => 
  ApiClient.get(`/cars/brands/${marca}/models/${modelo}/years`)

export const infoFipe = ( marca: string, modelo: string, ano: string) => 
  ApiClient.get(`/cars/brands/${marca}/models/${modelo}/years/${ano}`)