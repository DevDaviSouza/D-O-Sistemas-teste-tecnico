import ApiClient from "./ApiClient";

export const veiculosTipo = (tipo: string) => ApiClient.get(`/${tipo}/brands`)

export const modelos = (tipo: string, marca: string) => ApiClient.get(`/${tipo}/brands/${marca}/models`)

export const anoModelo = (tipo: string, marca: string, modelo: string) => ApiClient.get(`/${tipo}/brands/${marca}/models/${modelo}/years`)

export const infoFipe = (tipo: string, marca: string, modelo: string, ano: string) => ApiClient.get(`/${tipo}/brands/${marca}/models/${modelo}/years/${ano}`)