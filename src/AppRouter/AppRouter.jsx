import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './AppRouter.css'

//components
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import HomePage from '../pages/HomePage/HomePage';
import ContactPage from '../pages/ContactPage';
import ItemDetailPage from '../pages/ItemDetailPage'
import NotFoundPage from '../pages/NotFoundPage';
import ProductsPage from '../pages/ProductsPage';

//context
import { ThemeProvider } from '../context/ThemeContext';

function AppRouter() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <NavBar />
                <Switch>
                    <Route path="/item/:itemTitle" component={ItemDetailPage} />
                    <Route path="/products/:catId" component={ProductsPage} />
                    <Route path="/products" component={ProductsPage} />
                    <Route path="/cart" />
                    <Route path="/FAQ" />
                    <Route path="/contacto" component={ContactPage} />
                    <Route exact path="/" component={HomePage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
                <Footer />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default AppRouter;
