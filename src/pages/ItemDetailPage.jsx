//components
import { useParams } from "react-router";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

function ItemDetailPage() {
    const {itemId} = useParams ()
    return (
        <>
            <p>tu item es {itemId}</p>
            <ItemDetailContainer/>
        </>
    )
}

export default ItemDetailPage;