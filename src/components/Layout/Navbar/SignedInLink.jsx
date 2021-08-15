import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { auth as fireAuth } from '../../../utils/firebase.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import logo from '../../../Assets/Logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'PoppinsVN-400, serif',
    '& > a': {
        textDecoration: 'none',
        color:'#000000',
        transition: '0.2s',
    },
    '& > a:hover': {
        color: '#4F46E8',
        cusor: 'pointer'
    }
  },
  nav: {
        height: 'auto',
        minHeight: 'auto',
  },
  nav_content: {
        display: 'flex',
        justifyContent: 'space-evenly',
  },
  tabs: {
        padding: theme.spacing(0,10)
  },
  ava_content: {
        float: 'right',
  },
  ava: {
        fontSize: '2rem !important'
  },
  setting: {
        fontFamily: 'PoppinsVN-400, serif',
        '& > a': {
        textDecoration: 'none',
        color:'#000000',
        transition: '0.2s',
        },
        '& > a:hover': {
            color: '#4F46E8',
            cusor: 'pointer'
        }
  }
}));

export default function SignedInLink() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState({})
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    console.log(event.currentTarget.dataset)
  };


  return (
    <Grid md ={2} xs = {1}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    className={classes.ava_content}
                >
                    <AccountCircle className = {classes.ava} />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                    style: {
                      marginTop: "44px",
                      }
                    }}
                    className= {classes.setting}
                >
                    <Link to ='/'><MenuItem onClick={handleClose}>Đăng Kí</MenuItem></Link> 
                    <Link to ='/'><MenuItem onClick={handleClose}>Đăng Nhập</MenuItem></Link> 
                </Menu>
                </Grid>
  );
}
