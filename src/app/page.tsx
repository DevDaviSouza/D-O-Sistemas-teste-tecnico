import { CardDadosCarro } from "@/components/CardDadosCarro";
import CardFipe from "@/components/CardFipe";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-white font-bold my-7">Seja bem vindo ao site oficial de pesquisa da tabela FIPE!</h1>

        <section className="flex flex-col gap-30 lg:flex-row px-20 w-full">
          <CardDadosCarro />
          <CardFipe />
        </section>
      </div>
    </>
  );
}
