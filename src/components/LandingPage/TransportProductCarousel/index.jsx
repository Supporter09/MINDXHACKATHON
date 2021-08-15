import React from "react";
import { makeStyles } from '@material-ui/styles';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Carousel from 'react-material-ui-carousel';
import Card from '../../widgets/Card'
import ProductBanner from "../ProductBanner"
import Button from '@material-ui/core/Button';

import test_image from '../../../Assets/Test/bg.jpg'
import test_image2 from '../../../Assets/Test/bg2.jpg'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import arrow from '../../../Assets/G-Link/right-arrow.svg'
 
const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(8,0),
        textAlign: 'center !important'
    },
    typo: {
        // fontFamily:'Poppins, sans-serif',
        fontSize: '3rem',
        fontWeight: '700',
        [theme.breakpoints.down('sm')]: {
            fontSize:'36px !important'
        },
    },
    divider: {
        borderTop: '2px solid #1F1F63',
        width: '60%',
        margin: 'auto', 
        marginBottom:  theme.spacing(4)
    },
    carousel_container: {
        display: 'flex',
        marginRight: 'auto',
        marginLeft: 'auto',
        transition: '0.5s'
    },
    item:{
        padding: theme.spacing(2,0),
        display:'flex',
        justifyContent:'center'
    }
}));


export default function ProductCarousel(props) {
    const classes = useStyles();

    return (
        <div style={{backgroundColor:'#F4F6F7'}}>
        <Container className={classes.container} >
            <Typography variant='h2' gutterBottom className={classes.typo}>Các sản phẩm có thể vận chuyển</Typography>
            <Grid container >
                <Grid md={4} className={classes.item}>
                    <Card title={'hello'} image={test_image} btn={false} product_name={'hello'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <Card title={'hello'} image={test_image} btn={false} product_name={'hello'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}> 
                    <Card title={'hello'} image={test_image} btn={false} product_name={'hello'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <Card title={'hello'} image={test_image} btn={false} product_name={'hello'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <Card title={'hello'} image={test_image} btn={false} product_name={'hello'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}> 
                    <Card title={'hello'} image={test_image} btn={false} product_name={'hello'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
            </Grid>
            <div style={{float:'right'}}>
                <Button size="small" color="black" startIcon={<ArrowForwardIcon />}>
                    Xem thêm
                </Button>
            </div>
        </Container>
        </div>
    )
}
