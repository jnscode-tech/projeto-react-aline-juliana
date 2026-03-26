import "./Home.css";

const Home = () => {
  return (
    <main className="container">
      
      <div className="cards">
        {/* PRIMEIRO CARD */}
        <div className="card">
          <h2>Modelo 1</h2>
          <div className="img">
            <img src="/img_main/BabyLookTI.png" alt="Blusa 1" />
          </div>
          <p>Baby Look - Branca</p>
          <p>Preço - R$89.90</p>
        </div>

        {/* SEGUNDO CARD */}
        <div className="card">
          <h2>Modelo 2</h2>
          <div className="img">
            <img src="/img_main/BabyLookPretaTI.png" alt="Blusa 2" />
          </div>
          <p>Baby Look - Preto</p>
          <p>Preço - R$89.90</p>
        </div>

        {/* TERCEIRO CARD */}
        <div className="card">
          <h2>Modelo 3</h2>
          <div className="img">
            <img src="/img_main/BlusaBrancaTI.png" alt="Blusa 3" />
          </div>
          <p>Camiseta - Branca</p>
          <p>Preço - R$99.90</p>
        </div>

        {/* QUARTO CARD */}
        <div className="card">
          <h2>Modelo 4</h2>
          <div className="img">
            <img src="/img_main/BlusaPretaTI.png" alt="Blusa 4" />
          </div>
          <p>Camiseta - Preta</p>
          <p>Preço - R$89.90</p>
        </div>

        {/* QUINTO CARD */}

        <div className="card">
          <h2>Modelo 5</h2>
          <div className="img">
            <img src="/img_main/CasacoBegeTI.png" alt="Blusa 5" />
          </div>
          <p>Casaco - Bege</p>
          <p>Preço - R$189.90</p>
        </div>

        {/* SEXTO CARD */}

        <div className="card">
          <h2>Modelo 6</h2>
          <div className="img">
            <img src="/img_main/CasacoBrancoTI.png" alt="Blusa 6" />
          </div>
          <p>Casaco - Branco</p>
          <p>Preço - R$189.90</p>
        </div>

        {/* SÉTIMO CARD */}

        <div className="card">
          <h2>Modelo 7</h2>
          <div className="img">
            <img src="/img_main/BabyLookAzulTI.png" alt="Blusa 7" />
          </div>
          <p>Baby Look - Azul</p>
          <p>Preço - R$89.90</p>
        </div>

        {/* OITAVO CARD */}

        <div className="card">
          <h2>Modelo 8</h2>
          <div className="img">
            <img src="/img_main/BabyLookVerdeTI.png" alt="Blusa 8" />
          </div>
          <p>Baby Look - Verde</p>
          <p>Preço - R$89.90</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
