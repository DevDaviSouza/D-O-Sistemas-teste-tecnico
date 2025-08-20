// Criação de tipo para parâmetros
type InfoVeiculo = {
  label: string,
  content: string
}

// input utilizado no CardFipe para listagem de informações
const InputRetorno = ({InfoVeiculo}: {InfoVeiculo: InfoVeiculo}) => {
  return(
    <label className="flex flex-col">
      {InfoVeiculo.label}
      <input className="bg-gray-300 p-2 rounded text-black" value={InfoVeiculo.content} type="text" disabled/>
    </label>
  )
}

export default InputRetorno;