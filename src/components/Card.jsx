import '../css/Card.css';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom'


const Card = () => {
  return (
<div className="cards">
  <div className="card-item">
    <Link to="/category/camping">
      <img src="./camping-inicial.jpg" alt="Camping" />
      <p>Camping</p>
    </Link>
  </div>
  <div className="card-item">
    <Link to="/category/senderismo">
      <img src="./senderismo-inicial.avif" alt="Senderismo" />
      <p>Senderismo</p>
    </Link>
  </div>
</div>

  );

}

export default Card;