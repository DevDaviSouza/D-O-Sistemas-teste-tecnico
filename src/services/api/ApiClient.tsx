import axios from "axios";

const ApiClient = axios.create({
  baseURL: 'https://fipe.parallelum.com.br/api/v2',

  timeout: 10000
})

export default ApiClient