const Cards = ({ id, produto, img, descricao, preco }) => {
    return (
      <div className="card">
        
        <h2>{produto}</h2>
  
        <div className="img">
          <img src={img} alt={descricao} />
        </div>
  
        <p>{descricao}</p>
        <p>Preço - {preco}</p>
      </div>
    );
  };
  
  export default Cards;