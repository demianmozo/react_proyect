import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './AppRouter.css'
//components
import HomePage from '../pages/HomePage/HomePage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contacto" component={ContactPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;
