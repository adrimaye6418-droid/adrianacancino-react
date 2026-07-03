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

            //FIREBASE
        useEffect(() => {
            setLoader(true)
            //1. conectarnos a la base de datos / o conectar con query
            const collectionRef = type? query(collection(db, "rutasport"), where("category", "==", type)) : collection(db, "rutasport")

            //2. traer los documentos de la coleccion
            getDocs(collectionRef)
            .then((res) => {
                //Limpio la informacion
                const list = res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data()
                    }
                })
                //guardo los datos en el estado
                setData(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false))
            
        }, [type])

    //const subirData = () => {
       // console.log('subir data')
        //const colSub = collection(db, "rutasport")
        //products.map((prod) => {
        //    addDoc(colSub, prod)
        //})
        //}
        
    return (
        <>
        {
            loader ? <LoaderComponent  text={type? `Cargando categoria...` : 'Cargando productos...'}/> 
            :<div>   
         <h1>{type && <span style={{textTransform: 'capitalize'}}>{type}</span>}</h1>
         //Despues lo borro, es solo para subir la data a firebase
        {/*<button onClick={subirData}>Subir data</button>*/}
         <ItemList data={data}/>
         
        </div>
        }
        
        </>

    )
    
}


export default ItemListContainer