import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { pedirData } from "../../mock/pedirData"
import ItemList from "../ItemList/ItemList"

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        pedirData()
            .then((resp) => {
                setItems( resp )
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

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