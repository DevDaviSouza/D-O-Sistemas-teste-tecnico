import { CardDadosCarro } from "@/components/CardDadosCarro";
import CardFipe from "@/components/CardFipe";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-10">
        <h1 className="text-3xl text-gray-900 font-bold my-7 text-center items-center">Seja bem vindo ao site oficial de pesquisa da tabela FIPE!</h1>

        <section className="flex flex-col gap-30 lg:flex-row px-20 w-full justify-center items-center">
          <CardDadosCarro />
          <CardFipe />
        </section>
      </div>
    </>
  );
}
