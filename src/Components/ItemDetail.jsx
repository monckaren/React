import {Card} from 'react-bootstrap'

const ItemDetail = ({item}) => {
    return <>
    <div className='detailCard'>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item[0].imagen} />
  <Card.Body>
  <Card.Title>{item[0].nombre}</Card.Title>
  <Card.Text>{item[0].descripcion}</Card.Text>
  </Card.Body>
  </Card>
    </div>
    </>
}
export default ItemDetail