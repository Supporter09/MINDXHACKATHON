import React from "react";
import { makeStyles, Typography, Grid, Paper } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

import prjtubeImage from "../../../Assets/projectube.svg";
import chatbotImage from "../../../Assets/chatbot.png";

import DefaultButton from "../../widgets/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    height: "auto",
    padding: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  layout: {
    width: "100%",
    height: "100%",
    background: "rgba(13, 58, 165, 0.6)",
    display: "flex",
    flexFlow: "wrap column",
    justifyContent: "center",
    alignItems: "center",
  },
  workItem: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    padding: "5% 0",
  },
  carousel: {
    width: "100%",
    height: "400px",
    "@media screen and (max-width:500px)": { height: "600px" },
  },
  project: {
    width: "80%",
    height: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "@media screen and (max-width:500px)": { width: "95%" },
  },
  home_btn: {
    border: '2px solid #1F1F63',
    borderRadius:'10px',
    fontSize: '1rem',
    backgroundColor:'#1F1F63',
    '&:hover':{
        
        backgroundColor:'#fff',
        color: '#1F1F63',
        border: '2px solid #1F1F63'
    }
  },
  heading: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize:'36px !important'
    },
  }
}));

function Project(props) {
  const classes = useStyles();
  return (
    <Paper
      className={classes.project}
      style={{
        backgroundImage: `url(${props.item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      elevation={10}
    >
      <div className={classes.layout}>
        <Typography variant="h2">{props.item.name}</Typography>
        <Typography variant="body1" style={{ color: "#ffffff"}}>{props.item.description}</Typography>
        <DefaultButton href={props.item.url} className={classes.home_btn}>Check it out!</DefaultButton>
      </div>
    </Paper>
  );
}

const items = [
  {
    name: "Projectube",
    description:
      "LinkedIn cho học sinh sinh viên trong việc tìm kiếm cơ hội làm việc tại các tổ chức, dự án tình nguyện, phi lợi nhuận hoặc các câu lạc bộ ở Việt Nam.",
    image: prjtubeImage,
    url: "https://projectube.org"
  },
  {
    name: "Hurt Me or Heart Me",
    description:
      "Chatbot cho phép các bạn học sinh các trường THPT trong mạng lưới trò chuyện và tâm sự ẩn danh với nhau.",
    image: chatbotImage,
    url: "https://facebook.com/profile.php?id=270084233503755", 
  }
];

export default function ProductGallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.heading}>Sản phẩm của Vietcode</Typography>
      <Grid container className={classes.workItem}>
        <Carousel
          className={classes.carousel}
          autoPlay={true}
          timer="500"
          animation="slide"
          indicators={true}
          timeout="500"
          navButtonsAlwaysVisible={false}
        >
          {items.map((item, index) => {
            return <Project item={item} key={index}/>;
          })}
        </Carousel>
      </Grid>
    </div>
  );
}
