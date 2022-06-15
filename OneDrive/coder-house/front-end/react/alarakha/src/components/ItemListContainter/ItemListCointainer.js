import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { pedirData } from "../../mock/pedirData"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        pedirData()
            .then((res) => {
                if (!categoryId) {
                    setItems( res )
                } else {
                    setItems( res.filter((item) => item.categoria === categoryId) )
                }
            })
            .catch((error) => {
                console.log('ERROR', error)
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