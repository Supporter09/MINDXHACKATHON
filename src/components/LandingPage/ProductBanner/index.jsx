import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Card from '../../widgets/Card'
import './ProductBanner.css'

const useStyles = makeStyles((theme) => ({
    item:{
        padding: theme.spacing(0,2)
    }
}))

export default function ProductBanner(props) {
    const classes = useStyles()
    return (
        <div>
            <div class="product" >
                <Grid container>
                    <Grid className={classes.item}>
                    <Card title={'hello'} image={props.source} product_name={'hello'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                    </Grid>
                    <Grid className={classes.item}>
                    <Card title={'hello'} image={props.source} product_name={'hello'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                    </Grid>
                    <Grid className={classes.item}> 
                    <Card title={'hello'} image={props.source} product_name={'hello'} product_description={'Consequat amet ipsum qui culpa amet commodo ullamco consectetur fugiat non ex.'} />
                    </Grid>
                </Grid>
                
                
                {/* <div class="product-overlay"></div> */}
                {/* <img class="product-image" src={props.source} alt="product" /> */}
                {/* <div class="product-details fadeIn-bottom"> */}
                    {/* <h3 class="product-title">{props.title}</h3>
                    <p class="product-text">{props.content}</p> */}
                    {/* <a>{props.link}</a> */}
                {/* </div> */}
                {/* </a> */}
            </div>
        </div>
    )
}
