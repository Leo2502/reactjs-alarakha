import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { dataBase } from '../../firebase/config'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        const productosR = collection(dataBase, "productos")
        const q = categoryId ? query(productosR, where("categoria", "==", categoryId)) : productosR

        getDocs(q)
            .then((res) => {
                const productos = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setItems( productos )
            })
            .finally(() => {
                setLoading(false)
            })
        
        }, [categoryId])

    return (
        <section className="container my-5">
            {
                loading
                ?   <Spinner animation="border" role="status"/>
                :  <ItemList items={items}/>
            }
        </section>
    )
}