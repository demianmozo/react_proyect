import { Link } from 'react-router-dom';
import './NavBar.css';
//components
import logo from '../../assets/logosas.png';
import CartWidget from '../CartWidget/CartWidget'
//external components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function NavBar() {
  return (
    <div>
       <AppBar position="static" className="main-navbar">
        <Toolbar>
          <Typography variant="h6">
            <div className="container-logo">
                <Link to='/'><img src={logo} alt={"main logo"}/></Link>
            </div>
        </Typography>
        <div className='container-navbar'>
          <ul className="navbar-list">
            <li><Link to='/'><Button color="inherit">Inicio</Button></Link></li>
            <li><Link><Button color="inherit">Productos</Button></Link></li>
            <li><Link to='/contacto'><Button color="inherit">Contacto</Button></Link></li>
            <li><Link><Button color="inherit">FAQ</Button></Link></li>
        </ul>
        </div>
        <Link><CartWidget /></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
