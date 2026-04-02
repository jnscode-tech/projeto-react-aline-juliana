import "./Home.css";
import NavBarra from "../NavBar/NavBarra.jsx";
import Banner from "../Banner/Banner.jsx";
import Rodape from "../Footer/Rodape.jsx";
import Cards from "../Cards.jsx"


const Home = () => {

  const produtos = [
    { id: 1, produto: "Camiseta", img: "/img_main/BabyLookTI.png", descricao: "Baby Look - Branca", preco: "R$89.90" },
    { id: 2, produto: "Camiseta", img: "/img_main/BabyLookPretaTI.png", descricao: "Baby Look - Preto", preco: "R$89.90" },
    { id: 3, produto: "Camiseta", img: "/img_main/BlusaBrancaTI.png", descricao: "Camiseta - Branca", preco: "R$99.90" },
    { id: 4, produto: "Camiseta", img: "/img_main/BlusaPretaTI.png", descricao: "Camiseta - Preta", preco: "R$89.90" },
    { id: 5, produto: "Casaco", img: "/img_main/CasacoBegeTI.png", descricao: "Casaco - Bege", preco: "R$189.90" },
    { id: 6, produto: "Casaco", img: "/img_main/CasacoBrancoTI.png", descricao: "Casaco - Branco", preco: "R$189.90" },
    { id: 7, produto: "Camiseta", img: "/img_main/BabyLookAzulTI.png", descricao: "Baby Look - Azul", preco: "R$89.90" },
    { id: 8, produto: "Camiseta", img: "/img_main/BabyLookVerdeTI.png", descricao: "Baby Look - Verde", preco: "R$89.90" },
    { id: 9, produto: "Caneca", img: "/img_main/CanecaTI.png", descricao: "Caneca - Branca", preco: "R$49.90" },
    { id: 10, produto: "Caneca", img: "/img_main/CanecaStanleyTI.png", descricao: "Caneca - Stanley", preco: "R$119.90" },

  ];


  return (
    <>
      <NavBarra />
      <Banner />

     <main className="container">

        <div className="cards">

          {produtos.map((produto) => (
            <Cards
              key={produto.id}
              id={produto.id}
              produto={produto.produto}
              img={produto.img}
              descricao={produto.descricao}
              preco={produto.preco}
            />
          ))}
        </div>
      </main>

  <Rodape />

    </>
  );
}

export default Home;
