import { useContext, useState } from 'react';
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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';

//context
import ThemeContext from '../../context/ThemeContext';


function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { theme, handleTheme} = useContext(ThemeContext)
  
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

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
              <li><Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Productos
              </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Tartas</MenuItem>
                  <MenuItem onClick={handleClose}>Muffins y budines</MenuItem>
                  <MenuItem onClick={handleClose}>Boxes</MenuItem>
                </Menu></li>
            <li><Link to='/contacto'><Button color="inherit">Contacto</Button></Link></li>
            <li><Link to='/FAQ'><Button color="inherit">FAQ</Button></Link></li>
        </ul>
        </div>
        <div className='cart-container'>
          <Link to='/cart'><CartWidget /></Link>
            <Switch onChange={handleTheme}  />
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
