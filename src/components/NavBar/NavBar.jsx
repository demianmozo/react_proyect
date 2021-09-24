import logo from '../../assets/logosas.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
//external components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function NavBar() {
  return (
       <AppBar position="static" className="main-navbar">
        <Toolbar>
          <Typography variant="h6">
            <div className="container-logo">
                <img src={logo} alt={"main logo"}/>
            </div>
        </Typography>
        <div className='container-navbar'>
          <ul className="navbar-list">
            <li><Button color="inherit">Inicio</Button></li>
            <li><Button color="inherit">Productos</Button></li>
            <li><Button color="inherit">Contacto</Button></li>
            <li><Button color="inherit">FAQ</Button></li>
        </ul>
        </div>
        <CartWidget />
        </Toolbar>
      </AppBar>
  );
}

export default NavBar;
