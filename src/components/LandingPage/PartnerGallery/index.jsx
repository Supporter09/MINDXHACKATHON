import React from "react";
import { makeStyles } from '@material-ui/styles';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import yuneec from '../../../Assets/G-Link/yuneec.jpg'
import vinmart from '../../../Assets/G-Link/vinmart.png'
import kespry from '../../../Assets/G-Link/kespry.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    backgroundColor: '#fff',
    height: "auto",
    padding: "5%",
  },
  gallery: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: "5% 0",
  },
  galleryItem: {
    padding: "0 5%",

    "& > a > img": {
      width: "100%",
    },
  },
  typo: {
    // fontFamily:'Poppins, sans-serif',
    fontSize: '3rem',
    fontWeight: '700',
    [theme.breakpoints.down('sm')]: {
      fontSize:'36px !important'
    },
  },
}));

export default function PartnerGallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h2" className={classes.typo} gutterBottom>
          Đối tác của chúng tôi
        </Typography>

        <Grid
          container
          justify="space-between"
          spacing={4}
          className={classes.gallery}
        >
          <Grid item xs={12} sm={6} md={4} className={classes.galleryItem}>
            <a href="#" target="_blank">
              <img src={yuneec} alt="HMUN Logo" />
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.galleryItem}>
            <a href="#" target="_blank">
              <img src={vinmart} alt="SOS Logo" />
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.galleryItem}>
            <a href="#" target="_blank">
              <img src={kespry} alt="ASO Logo" />
            </a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
