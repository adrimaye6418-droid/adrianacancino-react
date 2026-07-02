import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncData"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import LoaderComponent from "./LoaderComponent"


const ItemListContainer = () => {

    const[data, setData] = useState([])

    const [loader, setLoader] = useState(false)
    
    const { type } = useParams()    


        useEffect(() => {
            setLoader(true)
            getProducts()
            .then(res => {

                if(type) {
                    const filtrados = res.filter((producto) => producto.category === type)
                    //setData(res.filter(producto => producto.category === type))
 
                    setData(filtrados);
                }   
                else {
                    setData(res)
                }
        })
            .catch((Error) => console.log(Error))
            .finally(() => setLoader(false))
    }, [type])
  

        
    return (
        <>
        {
            loader ? <LoaderComponent  text={type? `Cargando categoria...` : 'Cargando productos...'}/> 
            :<div>   
         <h1>{type && <span style={{textTransform: 'capitalize'}}>{type}</span>}</h1>
         <ItemList data={data}/>
         
        </div>
        }
        
        </>

    )
    
}


export default ItemListContainer