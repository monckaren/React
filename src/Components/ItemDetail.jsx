import {Card} from 'react-bootstrap'
import ItemCount from './ItemCount'
 const handleOnAdd = () => {
   console.log("on add")
 } 
const ItemDetail = ({item}) => {
    return <>
    <div className='detailCard'>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item[0].imagen} />
  <Card.Body>
  <Card.Title>{item[0].nombre}</Card.Title>
  <Card.Text>{item[0].descripcion}</Card.Text>
  <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
  </Card.Body>
  </Card>
    </div>
    </>
}
export default ItemDetail 