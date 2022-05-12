import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import ProstateForm from "./ProstateForm";

const useStyles = makeStyles(() => ({
  main: {
    minHeight: "70vh",
    textAlign: "center",
    margin: 10,
  },

  construction: {
    background: "Red",
    textAlign: "center",
  },

  padding: {
    padding: 30,
  },

  right: {
    float: "right",
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Container className={classes.padding} maxWidth="sm">
        <Typography variant="h3" className={classes.construction}>
          This website is still under construction
        </Typography>
      </Container>
      <Container className={classes.padding} maxWidth="md">
        <Typography variant="h6" color="textSecondary" gutterBottom>
          About
        </Typography>
        <Typography variant="h6" color="textSecondary">
          The Centre for Smart Health aims to create healthcare innovations with
          technology, making positive impacts to practice and the quality of
          care. We conduct cross-disciplinary applied research that capitalizes
          on our expertise in technology, and translates the results into
          practice to improve healthcare education, diagnosis and treatment.
        </Typography>
      </Container>
      <Container className={classes.padding} maxWidth="md">
        <ProstateForm />
      </Container>
    </main>
  );
}
