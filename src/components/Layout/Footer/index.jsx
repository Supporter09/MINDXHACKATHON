import React from "react";
import { makeStyles } from '@material-ui/styles';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "../../../Assets/fbIcon.svg";
import InstagramIcon from "../../../Assets/igIcon.svg";

import whiteLogo from '../../../Assets/Logo(White).svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
        backgroundColor: "#171010",
        height: "auto",
        padding: "1%",
        paddingTop: '1.5%'
    },
    responsive_container:{
        [theme.breakpoints.down('xs')]: {
            
        },
    },
    title: {
        textAlign: 'left',
        fontFamily: 'PoppinsVN-400,serif',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: '1rem',
        padding: theme.spacing(1, 0),
        '& > a': {
            textDecoration: 'none',
            color:'rgba(255, 255, 255, 0.6)',
            transition: '0.2s',
        },
        '& > a:hover': {
            color: '#ffffff',
            cusor: 'pointer'
        },
        [theme.breakpoints.between('md','xs')]: {
            fontSize:'12px !important'
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        },
    },
    headTitle: {
        textAlign: 'left',
        fontFamily: 'PoppinsVN-400,serif',
        color: 'rgba(255, 255, 255, 1);',
        padding: theme.spacing(1, 0),
        [theme.breakpoints.between('md','xs')]: {
            fontSize:'12px !important'
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        },
    },
    block: {
        display:'flex',
        justifyContent:'center',
        padding: theme.spacing(0, 1),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 1),
        },
    },
    logo: {
        position: 'relative',
        left: '-30px',
        [theme.breakpoints.down('md')]: {
            display:'none'
        },
    },
    tab: {
        padding: '16px 24px'
    },
    term_condi:{
        padding: theme.spacing(0, 1),
        // [theme.breakpoints.down('md')]: {
        //     display: 'none'
        // },
    },
    icon: {
        width: 48,
        height: 48,
      },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{borderTop:'1px solid rgba(245, 246, 246, 0.2)'}}>
        
      <Grid container maxWidth="md" justifyContent='center' className={classes.responsive_container}>
        {/* <div>
            <img src={whiteLogo} alt='logo' height="60" className={classes.logo}></img>
        </div> */}
        <Grid md={6} className={classes.block}>
            <div style={{padding:'0 150px'}}>
                <Typography variant='body2' className={classes.headTitle}>Về G-LINK</Typography>
                <Typography variant="body2" className={classes.title}>Tổ chức cung cấp dịch vụ vận chuyển các nhu yếu phẩm, cũng như các vật dụng cần thiết bằng drone để giảm thiểu khả năng lây nhiễm chéo trong cộng đồng</Typography>
            </div>
        </Grid>
        <Grid md={6} className={classes.block}>
            <div>
                <Typography variant='body2' className={classes.headTitle}>Thông tin liên hệ</Typography>
                <Typography variant='body2' className={classes.title}>Email: CEO@glink.org</Typography>
                <Typography variant='body2' className={classes.title}>Hotline: 0386142616</Typography>
            </div>
        </Grid>
      </Grid>
    </div>
  );
}
