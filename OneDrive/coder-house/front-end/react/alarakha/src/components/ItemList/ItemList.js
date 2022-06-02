import Item from "../Item/Item"

const ItemList = ( {items} ) => {

    return (
        <div>
            <h2>Catálogo</h2>
            <hr/>
            {
                items.map((item) => <Item key={item.id} item={item}/>)
            }
        </div>
    )
}

export default ItemList