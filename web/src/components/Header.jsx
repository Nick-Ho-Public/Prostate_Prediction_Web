import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import shealthLogo from "../../static/img/shealth_banner.png";
import polyuLogo from "../../static/img/polyu_banner.png";

const useStyles = makeStyles(() => ({
  bar: {
    background: "Aliceblue",
    position: "static",
    minHeight: "15vh",
  },

  logo: {
    margin: 20,
    width: "auto",
    height: "8vh",
  },

  right: {
    float: "right",
  },

  title: {
    textAlign: "center",
    margin: 20,
    verticalAlign: "center",
    color: "SlateGrey",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.bar}>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={12} md={4}>
            <img
              className={classes.logo}
              alt="S.Health Banner"
              src={shealthLogo}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography className={classes.title} variant="h6">
              Centre for Smart Health
              <br />
              Machine Learning Calculator
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <img
              className={`${classes.logo} ${classes.right}`}
              alt="PolyU Banner"
              src={polyuLogo}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
