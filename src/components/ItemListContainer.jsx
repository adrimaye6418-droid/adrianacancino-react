import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncData"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, query, where, addDoc } from "firebase/firestore"
import { db } from "../service/firebase"
import { products } from "../mock/asyncData"


const ItemListContainer = () => {
    const[data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const { type } = useParams()    
        useEffect(() => {
            setLoader(true)
            const collectionRef = type? query(collection(db, "rutasport"), where("category", "==", type)) : collection(db, "rutasport")
            getDocs(collectionRef)
            .then((res) => {
                const list = res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data()
                    }
                })
                setData(list)
            })
            .catch((error) => console.log(error))
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