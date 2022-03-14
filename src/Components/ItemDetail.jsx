import {Card, Button} from 'react-bootstrap'

const ItemDetail = ({item}) => {
    return <>
    <div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.imagen} />
  <Card.Body>
    <Card.Title>{item.nombre}</Card.Title>
    <Card.Text>{item.descripcion}</Card.Text>
  </Card.Body>
</Card>
    </div>
    </>
}
export default ItemDetail