import React from 'react'
import { makeStyles } from '@material-ui/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import 'bootstrap/dist/css/bootstrap.min.css'
import './NotFound.css'

import DefaultButton from "../../widgets/Button";

const useStyles = makeStyles((theme) => ({
    notfound_btn: {
        border: '1px solid #fff',
        color: '#fff',
        backgroundColor: 'transparent',
        borderRadius: '0px',
        "&:hover":{
            backgroundColor: '#fff',
            color:'#000',
            border: '1px solid #fff'
        }
    },
    arrow: {
        fontSize: '2rem',
        paddingBottom: '5px',
        marginRight:'5px'
    }
}))

export default function NotFound() {
    const classes = useStyles();

    let handleOnClick = () => {
        window.location.href = '/'
    }
    return (
        <>
        <div className="not-found">     
            <div id="hero">
                <h1 className='hero-h1'>404</h1>
                <h1 className='hero-h1'>404</h1>
                <h1 className='hero-h1'>404</h1>
                <h1 className='hero-h1'>404</h1>
                <h1 className='hero-h1'>404</h1>
            </div>
            <div className='sub-title'>
                <h9>PAGE NOT FOUND</h9>
            </div>   
            
            {/* <div className="btn-notfound">
                <div className="box" >
                    <div className="btn btn-three" onClick={handleOnClick}>
                        <a href='/' className="btn-content">BACK TO HOME</a>
                    </div>
                </div>
            </div> */}
            <DefaultButton className={classes.notfound_btn} onClick={handleOnClick} ><ArrowBackIcon className={classes.arrow} /> RETURN TO HOMEPAGE</DefaultButton>
        </div> 
        </>
    )
}
