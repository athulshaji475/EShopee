import React from 'react'
import '../StyleSheets/CardStyle.css'
import { useNavigate,Link } from 'react-router-dom'
function Product_Card(props) {

    const navigate=useNavigate()
    
  return (

    <div>
    <article className="card">
      <div className="card__img">
        <img src={props.ImgUrl} alt={props.ShoesName} />
      </div>
      <div className="card__name">
        <p>{props.ShoesName}</p>
      </div>
      <div className="card__precis">
        <a href="#" className="card__icon">
          <ion-icon name="heart-outline"></ion-icon>
        </a>
  
        <div>
          <span className="card__preci card__preci--before">{props.Price}</span>
          <span className="card__preci card__preci--now">{props.Discount}</span>
        </div>
        <a href="#" className="card__icon">
          <ion-icon name="cart-outline"></ion-icon>
        </a>
      </div>
      <div className="card__actions"> {/* New container for action buttons */}
    { <Link to={`/Details/${props.ShoesName}`} > <button className="card__button card__button--buy" > Buy Now</button></Link> 
       
    }
      </div>
    </article>
  </div>
  
  )
}

export default Product_Card
