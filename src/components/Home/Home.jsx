import "./Home.css";
import NavBarra from "../NavBar/NavBarra.jsx";
import Banner from "../Banner/Banner.jsx";
import Rodape from "../Footer/Rodape.jsx";


const Home = () => {
  return (
    <>
      <NavBarra />
      <Banner />


      <main className="container">



        <div className="cards">
          {/* PRIMEIRO CARD */}
          <div className="card">
            <h2>Camiseta</h2>
            <div className="img">
              <img src="/img_main/BabyLookTI.png" alt="Blusa 1" />
            </div>
            <p>Baby Look - Branca</p>
            <p>Preço - R$89.90</p>
          </div>

          {/* SEGUNDO CARD */}
          <div className="card">
          <h2>Camiseta</h2>
            <div className="img">
              <img src="/img_main/BabyLookPretaTI.png" alt="Blusa 2" />
            </div>
            <p>Baby Look - Preto</p>
            <p>Preço - R$89.90</p>
          </div>

          {/* TERCEIRO CARD */}
          <div className="card">
          <h2>Camiseta</h2>
            <div className="img">
              <img src="/img_main/BlusaBrancaTI.png" alt="Blusa 3" />
            </div>
            <p>Camiseta - Branca</p>
            <p>Preço - R$99.90</p>
          </div>

          {/* QUARTO CARD */}
          <div className="card">
          <h2>Camiseta</h2>
            <div className="img">
              <img src="/img_main/BlusaPretaTI.png" alt="Blusa 4" />
            </div>
            <p>Camiseta - Preta</p>
            <p>Preço - R$89.90</p>
          </div>

          {/* QUINTO CARD */}
          <div className="card">
          <h2>Camiseta</h2>
            <div className="img">
              <img src="/img_main/CasacoBegeTI.png" alt="Blusa 5" />
            </div>
            <p>Casaco - Bege</p>
            <p>Preço - R$189.90</p>
          </div>

          {/* SEXTO CARD */}
          <div className="card">
          <h2>Camiseta</h2>
            <div className="img">
              <img src="/img_main/CasacoBrancoTI.png" alt="Blusa 6" />
            </div>
            <p>Casaco - Branco</p>
            <p>Preço - R$189.90</p>
          </div>

          {/* SÉTIMO CARD */}
          <div className="card">
          <h2>Camiseta</h2>
            <div className="img">
              <img src="/img_main/BabyLookAzulTI.png" alt="Blusa 7" />
            </div>
            <p>Baby Look - Azul</p>
            <p>Preço - R$89.90</p>
          </div>

          {/* OITAVO CARD */}
          <div className="card">
          <h2>Camiseta</h2>
            <div className="img">
              <img src="/img_main/BabyLookVerdeTI.png" alt="Blusa 8" />
            </div>
            <p>Baby Look - Verde</p>
            <p>Preço - R$89.90</p>
          </div>

          {/* NONO CARD */}
          <div className="card">
            <h2>Caneca</h2>
            <div className="img">
              <img src="/img_main/CanecaTI.png" alt="Blusa 9" />
            </div>
            <p>Caneca - Branca</p>
            <p>Preço - R$49.90</p>
          </div>

          {/* DÉCIMO CARD */}
          <div className="card">
            <h2>Caneca Stanley</h2>
            <div className="img">
              <img src="/img_main/CanecaStanleyTI.png" alt="Canela" />
            </div>
            <p>Caneca - Stanley</p>
            <p>Preço - R$119.90</p>
          </div>

        </div>
      </main>

      <Rodape />

    </>
  );
}

export default Home;
