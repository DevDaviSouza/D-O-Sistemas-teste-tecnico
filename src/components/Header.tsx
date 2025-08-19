import Image from "next/image"

const Header = () => {
  return(
    <header className="bg-gray-300">
      <Image src="/images/tabela fipe.png" alt="Tabela Fipe logo" width={150} height={180}/>
    </header>
  )
}

export default Header