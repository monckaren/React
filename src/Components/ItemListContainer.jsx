
import ItemCount from "./ItemCount"

const ItemLisContainer =  (props) => {
    const toOnAdd = () => {} 
return (
<main className="container">
    <h2>{props.greeting}</h2>
    <ItemCount initial={1} stock={10} onAdd={toOnAdd}/>
   
</main>)
}
export default ItemLisContainer