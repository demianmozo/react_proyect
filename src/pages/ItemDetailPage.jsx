//components
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

function ItemDetailPage() {
    const {itemTitle} = useParams ()
    return (
        <>
            <ItemDetailContainer/>
        </>
    )
}

export default ItemDetailPage;