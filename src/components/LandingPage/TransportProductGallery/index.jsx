import React from "react";
import { makeStyles } from '@material-ui/styles';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TransportCard from '../../widgets/TransportCard'
import Button from '@material-ui/core/Button';

import paper from '../../../Assets/G-Link/paper.jpg'
import nc_ngot from '../../../Assets/G-Link/nc_ngot.jpg'
import test_image from '../../../Assets/Test/bg.jpg'
import test_image2 from '../../../Assets/Test/bg2.jpg'
 
const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(8,0),
        textAlign: 'center !important'
    },
    typo: {
        fontSize: '3rem',
        fontWeight: '700',
        [theme.breakpoints.down('sm')]: {
            fontSize:'36px !important'
        },
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
        <Container className={classes.container}>
            <Typography variant='h2' gutterBottom className={classes.typo}>Các đồ vật có sẵn có thể vận chuyển</Typography>
            <Grid container >
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={paper} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={nc_ngot} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}> 
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}> 
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}> 
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}> 
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}> 
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}> 
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}> 
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}>
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
                <Grid md={4} className={classes.item}> 
                    <TransportCard title={'PRODUCT'} image={test_image} btn={true} product_name={'PRODUCT'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                </Grid>
            </Grid>
        </Container>
    )
}
