export const CardDadosCarro = () => {
  return (
    <div className="flex flex-col bg-gray-500 p-7 rounded-2xl items-center justify-center gap-5 text-white">
      <h1 className=" text-2xl font-bold">Encontre seu veículo:</h1>

      <form className="flex flex-col gap-7">
        <div className="flex flex-row gap-5">
          <label className="flex flex-col">
            Tipos de veículos:
            <select className="bg-gray-300 text-black p-2 rounded" name="Tipos de veículos" >
              <option value="">Selecione um tipo de veículo</option>
              <option value="cars">Carros</option>
              <option value="motorcycles">Motos</option>
              <option value="trucks">Caminhões</option>
            </select>
          </label>

          <label className="flex flex-col">
            Marcas/Montadoras:
            <select className="bg-gray-300 text-black p-2 rounded" name="Marcas/Montadoras" >
              <option value="">Selecione uma marca de veículo</option>
              <option value="cars">Carros</option>
              <option value="motorcycles">Motos</option>
              <option value="trucks">Caminhões</option>
            </select>
          </label>
        </div>

        <div>
          <label className="flex flex-col">
            Modelos:
            <select className="bg-gray-300 text-black p-2 rounded" name="Modelos">
              <option value="">Selecione um modelo de veículo</option>
              <option value="modelo1">modelo1</option>
              <option value="modelo2">modelo2</option>
              <option value="modelo3">modelo3</option>
            </select>
          </label>
        </div>

        <div className="flex w-full items-center justify-center">
          <label className="flex flex-col">
            Ano:
            <select className="bg-gray-300 text-black p-2 rounded " name="Ano">
              <option value="">Selecione o ano do veículo</option>
              <option value="2025">2025</option>
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