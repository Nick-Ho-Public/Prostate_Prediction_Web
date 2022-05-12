import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    background: "SeaShell",
    position: "static",
    bottom: 0,
    minHeight: "15vh",
  },

  text: {
    margin: "50px 30px 50px 30px",
    color: "SlateGrey",
    fontSize: "0.8em",
    textAlign: "left",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={8}>
        <Typography className={classes.text}>
          Contact:
          <br />
          <br />
          Prof. Thomas Choi, Director
          <br />
          Centre for Smart Health
          <br />
          Email:&nbsp;
          <a href="mailto:hskschoi@polyu.edu.hk">hskschoi@polyu.edu.hk</a>
          <br />
          Tel: +852 3400-3214
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography className={classes.text}>
          DISCLAIMER: This Machine Learning Calculator Does Not Provide Any
          Medical Service. The Information Contained On This Site Is For
          Informational Or Educational Purposes Only And Is Not Intended To
          Provide A Medical Advice, Diagnosis Or Assessment. Always Consult A
          Licensed Healthcare Professional With Any Questions You May Have
          Regarding A Medical Condition.
        </Typography>
      </Grid>
    </Grid>
  );
}
