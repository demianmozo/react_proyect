//components
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

function ProductsPage() {
    const { catId } = useParams()

    return (
        <>
            <CategoryFilter />
            <ItemListContainer />
        </>
    )
}

export default ProductsPage;