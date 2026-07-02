
//Se va a usar el componente Card de React Bootstrap para mostrar cada producto en la lista. El componente Item recibe un objeto product como prop y muestra su imagen, nombre y precio.
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"


function Item ({prod}) {
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.img} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>
                    ${prod.price}
                </Card.Text>
                <Link className="btn btn-dark" to={`/item/${prod.id}`}>Ver Detalles</Link>
            </Card.Body>
        </Card>
    )
}

export default Item