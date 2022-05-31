import ItemCount from '../ItemCount/ItemCount'

export const ItemListContainer = ({producto}) => {

    return (
        <section className="container my-5">
            <h2>Nuestros productos</h2>
            <hr/>

            <p>Producto: {producto}</p>
            <p>Precio: $</p>
            <ItemCount/>
        </section>
    )
}