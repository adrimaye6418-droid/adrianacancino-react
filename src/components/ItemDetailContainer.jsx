import { useEffect, useState } from "react"
import { getOneProduct } from "../mock/asyncData"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})

    const [loading, setLoading] = useState(true)

    const [invalidId, setInvalidId] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        
        //1 conectanos a nuestra coleccion de productos/ y crear una referencia
        const docRef = doc(db, "rutasport", id)
        //2. traer el documento
        getDoc(docRef)

         .then((res) => {
            if(res.data()) {
                setDetail({id: res.id, ...res.data()})
            } else {
                setInvalidId(true)
            }
         })

         .catch((Error) => console.log(Error))
         .finally(() => setLoading(false))
    }, [id])

  
    return (
        <>
            {loading ? <LoaderComponent text="Cargando detalle..." /> : <ItemDetail detail={detail} />
            }
        </>
    )
}

export default ItemDetailContainer