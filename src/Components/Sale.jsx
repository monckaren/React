
import {useState, useEffect} from "react"
import {Card} from "react-bootstrap"
import {toast} from "react-toastify"

let productosSale = [
    {id:1, nombre:"Campera White", imagen: "./img/ary-milligan-nLVyej-i2N4-unsplash.jpg", precio:"5800", quantity: 0},
    {id:2, nombre: "Remera Black Slim Fit", imagen: "./img/ian-dooley-1yl3jzKoKXg-unsplash.jpg", precio:"2300", quantity:0 },
    {id:3, nombre: "Jean Slim Fit", imagen: "./img/vladimir-fedotov-MPfyh3xJ1iE-unsplash.jpg", precio:"4800", quantity:0 },
   
    ]
export const Sale =  () => {
const [loading, setLoading] = useState(true)
const [ productos, setProductos] = useState([])

useEffect(() => {
    const promise = new Promise ((res, rej) => {
    setTimeout(() => {
        res(productosSale) 
},2000)
})


promise
.then((respuestaApi) => {
    setProductos(productosSale) 
 })
 .catch((errorApi) => {
     toast.error("Error del servidor")
 })
 .finally(() => {
    setLoading (false) 
 })
})

    return <>
    <section className="Cards">
    <div className="container">
    <div className="row">
    <div className="col-md-12 py-3">
    <Card className=" p-2 g-4" style={{ width: '15rem' }}>
    <Card.Img className="card-img" variant="top" src={productos.imagen} />
    <Card.Body>
    <Card.Title>{productos.nombre}</Card.Title>
    <Card.Text> $ {productos.precio}</Card.Text>
    
    </Card.Body>
    </Card>
      </div>

    </div>
    </div>
   
    </section>
    </>
}

