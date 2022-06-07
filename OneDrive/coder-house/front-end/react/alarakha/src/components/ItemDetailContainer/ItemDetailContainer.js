import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { pedirData } from "../../mock/pedirData"
import ItemDetail from "../ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)    

    useEffect(() => {

        pedirData()
            .then((res) => {
                setItem( res.find((item) => item.id === 2 ))
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [item])

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