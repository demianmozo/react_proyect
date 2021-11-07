import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Menu,
  Switch,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import Logo from '../../assets/logosas.png';

import CartWidgetContainer from '../CartWidgetContainer/CartWidgetContainer';

import './NavBar.css';

//context
import ThemeContext from '../../context/ThemeContext';


const headersData = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Productos",
    href: "/products",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
  {
    label: "FAQ",
    href: "/FAQ",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "rgb(252, 235, 205)",
    paddingRight: "10px",
    paddingLeft: "10px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "grey",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header() {
  const { handleTheme } = useContext(ThemeContext)

  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {sasLogo}
        <div>{getMenuButtons()}</div>
        <div className='btns-container'>
          {navbarCart}
          {toggleDarkMode}
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
          {toggleDarkMode}
        </Drawer>

        <div>{sasLogo}</div>
        {navbarCart}
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const sasLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      <div className="container-logo">
        <Link to='/'><img src={Logo} alt={"main logo"} /></Link>
      </div>
    </Typography>
  );

  const toggleDarkMode = (
    <Switch onChange={handleTheme} />
  )

  const navbarCart = (
    <div>
      <CartWidgetContainer />
    </div>
  )


  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}