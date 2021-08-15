import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import PartnerGallery from '../../components/LandingPage/PartnerGallery'
import CriticalProductCarousel from '../../components/LandingPage/CriticalProductCarousel'
import TransportProductCarousel from '../../components/LandingPage/TransportProductCarousel'
import Navbar from '../../components/Layout/Navbar'
import Footer from '../../components/Layout/Footer'

import background from '../../Assets/G-Link/drone.jpg'

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



export default function HomePage() {
    const classes = useStyles();

    return (
        <>
        <Navbar></Navbar>
        
        <div className={classes.hero_container} style={{backgroundImage: `url(${background})`,}}>
            <Typography variant="h1" className={classes.hero_headline}>
                G - LINK <br/>
                LINK THE WORLD
            </Typography>
            <div className={classes.overlay}></div>
            <div class={classes.shadowOverlay}></div>
            
        </div>
        <CriticalProductCarousel></CriticalProductCarousel>
        <TransportProductCarousel></TransportProductCarousel>
        <PartnerGallery></PartnerGallery>
        <Footer></Footer>
        </>
    )
}
