import axios from "axios";

// Configuração da API com timeout para encerramento de serviço em caso de falha
const ApiClient = axios.create({
  baseURL: 'https://fipe.parallelum.com.br/api/v2',

  timeout: 10000
})

export default ApiClient