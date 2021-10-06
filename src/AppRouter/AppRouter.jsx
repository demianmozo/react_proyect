import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './AppRouter.css'

//components
import NavBar from '../components/NavBar/NavBar';
import HomePage from '../pages/HomePage/HomePage';
import ContactPage from '../pages/ContactPage';
import ItemDetailPage from '../pages/ItemDetailPage'
import NotFoundPage from '../pages/NotFoundPage';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

//context
import { ThemeProvider } from '../context/ThemeContext';

function AppRouter() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <NavBar />
                <Switch>
                    <Route path="/item/:itemTitle" component={ItemDetailPage} />
                    <Route path="/category/:categoryId" component={ItemListContainer} />
                    <Route path="/cart" />
                    <Route path="/contacto" component={ContactPage} />
                    <Route exact path="/" component={HomePage} />
                    <Route path="*" component={NotFoundPage} />
            </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default AppRouter;
