import './card.css'

function Card() {
  return (
    <div className="card">
      <div className="container">
        <div className="body">
          <div className="stock_img">
            <img src="./images/itsa.png"></img>
          </div>
          <div className="title">
            <div className="stock_ticker">ITSA</div>
            <div className="stock_name">Itausa S.A</div>
          </div>
          <div className="current_value">
            <p>Valor Atual</p>
            <span>R$ 10,00</span>
          </div>
          <div className="ideal_value">
            <p>Valor Ideal</p>
            <span>R$ 15,00</span>
          </div>
          <div className="upside_value">
            <p>Valor Atual</p>
            <span>50%</span>
          </div>
        </div>
      </div>
    </div>    
  );
}

export default Card;