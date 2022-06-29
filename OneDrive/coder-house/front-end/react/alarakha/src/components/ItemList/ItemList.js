import Item from "../Item/Item"
import './ItemList.scss'

const ItemList = ( {items} ) => {

    return (
        <div>
            <h2>Catálogo</h2>
            <hr/>
            <div className="itemContainer">
            {
                items.map((item) => <Item key={item.id} item={item}/>)
            }
            </div>
        </div>
    )
}

export default ItemList