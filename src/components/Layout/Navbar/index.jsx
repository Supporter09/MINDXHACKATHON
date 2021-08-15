import {
    AppBar,
    Toolbar,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
  import { connect } from 'react-redux';
  import SignedInLink from './SignedInLink';

  import logo from '../../../Assets/G-Link/logo.svg';
  const headersData = [
    {
      label: "TRANG CHỦ",
      href: "/",
    },
    {
      label: "NHU YẾU PHẨM",
      href: "/criticalproduct",
    },
    {
      label: "VẬN CHUYỂN",
      href: "/transportproduct",
    }
  ];
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    header: {
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    menuButton: {
      fontFamily: "PoppinsVN-500, sans-serif",
      
      fontSize: "18px",
      marginLeft: "38px",
      '&:hover':{
        backgroundColor: 'transparent',
        color: "rgba(31, 31, 99, 1)",
      }
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
    user_ava:{
        marginLeft:'auto',
        '& > div':{
            maxWidth: '0px',
            flexBasis: '0px'
        }
    },
  }));
  
 function NavBar(props) {
    const classes = useStyles();
    const {auth} = props 
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 1200
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
    }, []);
  
    const displayDesktop = () => {
      return (
        <Toolbar className={classes.toolbar}>
          <RouterLink to='/'><img src={logo} style={{width:'36px'}}></img></RouterLink>
          <div>{getMenuButtons()}</div>
          {auth.uid && auth
            ? (
              null
            )
            : (
              <SignedInLink></SignedInLink>
            )
            }
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
            <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
            
          </Drawer>
  
          <RouterLink to='/'><div><img src={logo} style={{width:'36px'}}></img></div></RouterLink>
          <div className={classes.user_ava}>
          {auth.uid && auth
            ? (
              null
            )
            : (
              <SignedInLink></SignedInLink>
            )
          }
          </div>
          
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
  
    const mainLogo = <logo/>;
  
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: classes.menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };
  
    return (
      <div className={classes.root}>
        <AppBar className={classes.header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </div>
    );
  }
  

  const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  };
export default connect(mapStateToProps)(NavBar)