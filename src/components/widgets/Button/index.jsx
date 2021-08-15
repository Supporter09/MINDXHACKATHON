import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    alignItems: "center",
    padding: "10px 30px",
    width: "fit-content",
    margin: "30px 0",
    backgroundColor: "#1F1F63",
    borderRadius: "30px",
    fontFamily: "PoppinsVN-400, serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textTransform: "none",
    textAlign: "center",
    color: "#FFFFFF",

    "&:active, &:hover": {
      backgroundColor: "white",
      color: "#4F46E8",
      border: "2px solid #4F46E8",
      padding: "10px 30px"
    },
  },
};

function DefaultButton(props) {
  const { classes, children, className, ...other } = props;

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Button className={clsx(classes.root, className)} {...other}>
        {children}
      </Button>
    </div>
  );
}

DefaultButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(DefaultButton);
