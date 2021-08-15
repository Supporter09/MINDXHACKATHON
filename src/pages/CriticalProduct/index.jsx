import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import Blog from '../../components/BlogPage/Blog'
import Navbar from '../../components/Layout/Navbar'
import Footer from '../../components/Layout/Footer'
import blog from '../../Assets/blog.png'
import background from '../../Assets/G-Link/drone.jpg'
import CriticalProductGallery from '../../components/LandingPage/CriticalProductGallery'


const useStyles = makeStyles((theme) => ({
    hero_container:{
        opacity: '1',
        top: 'initial',
        position: 'relative',
        paddingBottom: '0',
        
        zIndex: '6',
        left: '0',
        top: '0',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    },
    hero_headline: {
        position:'absolute',
        zIndex:'10',
        textAlign:'left',
        padding: theme.spacing(0,24),
        maxWidth: '100%',
        color:'#fff',
        fontSize:'60px !important',
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0,16),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0,4),
            fontSize:'36px !important'
        },
    },
    overlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        opacity: '0.6',
        backgroundColor: '#000000',
    },
    shadowOverlay:{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        opacity: '0.4',
        background:'-moz-linear-gradient(top,transparent 0%,rgba(0, 0, 0, 0.8) 100%)',
        background: '-webkit-linear-gradient(top,transparent 0%,rgba(0, 0, 0, 0.8) 100%)',
        background: 'linear-gradient(to bottom,transparent 0%,rgba(0, 0, 0, 0.8) 100%)',
        filter: "progid: DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#cc000000', GradientType=0)",
    }
}))

export default function BlogPage(props) {
    const classes = useStyles();
    return (
        <div style={{backgroundColor:'#F4F6F7'}}>
            <Navbar></Navbar>
            <div className={classes.hero_container} style={{backgroundImage: `url(${background})`,}}>
                <Typography variant="h1" className={classes.hero_headline}>
                    Nhu yếu phẩm
                </Typography>
                <div className={classes.overlay}></div>
                <div class={classes.shadowOverlay}></div>
            
            </div>
            <CriticalProductGallery></CriticalProductGallery>
            <Footer></Footer>
        </div>
    )
}
