import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { pedirData } from "../../mock/pedirData"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const { itemId } = useParams()

    useEffect(() => {

        pedirData()
            .then((res) => {
                setItem( res.find((item) => item.id === Number(itemId) ))
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <section className="container my-5">
            {
                loading
                ?   <Spinner animation="border" role="status"/>
                :  <ItemDetail item={item}/>
            }
        </section>
    )
}