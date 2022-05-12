import React, { useState, useReducer } from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Button,
  Typography,
  TextField,
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Send } from "@material-ui/icons";
import proxyPath from "./Basepath";

const useStyles = makeStyles(() => ({
  paper: {
    margin: 20,
    padding: 20,
  },

  left: {
    textAlign: "left",
  },

  margin: {
    margin: 30,
  },
}));

export default function ProstateForm() {
  const classes = useStyles();

  const [form, setForm] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      PSA: 0,
      DRE: true,
      TRUS_volume: 0,
      TRUS_Lesion: true,
    }
  );

  const [result, setResult] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      bin: 0,
      sign: 0,
    }
  );

  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ [name]: value });
  };

  function handleError(response) {
    if (!response.ok) {
      throw response;
    }
    return response;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { ...form };
    await fetch(`${proxyPath}/api/prostate/?significant=false&model=RF`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        handleError(response);
        return response.json();
      })
      .then((response) =>
        setResult({ bin: Math.round(response.Probability * 1000) / 10 })
      )
      .catch((error) => error);

    await fetch(`${proxyPath}/api/prostate/?significant=true&model=RF`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        handleError(response);
        return response.json();
      })
      .then((response) =>
        setResult({ sign: Math.round(response.Probability * 1000) / 10 })
      )
      .catch((error) => error);
    setLoading(false);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="h4" variant="h4">
          Prostate Cancer Risk Prediction
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.margin} elevation={10}>
          <form onSubmit={handleSubmit}>
            <Grid container justify="center" alignItems="center">
              <Grid className={classes.left} item xs={12} sm={12} md={4}>
                <Grid className={classes.margin} item xs={12}>
                  <TextField
                    label="1. PSA"
                    name="PSA"
                    required="true"
                    type="number"
                    helperText="PSA is a blood test that measures the amount of prostate-specific antigen (PSA) in your blood."
                    inputProps={{
                      min: 0,
                      max: 1000,
                      step: 0.01,
                    }}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid className={classes.margin} item xs={12}>
                  <FormControl required="true" component="fieldset">
                    <FormLabel>2. DRE</FormLabel>
                    <RadioGroup column name="DRE" onChange={handleInput}>
                      <FormControlLabel
                        value="true"
                        control={<Radio required="true" color="primary" />}
                        label="Abnormal"
                      />
                      <FormControlLabel
                        value="false"
                        control={<Radio color="secondary" />}
                        label="Normal"
                      />
                    </RadioGroup>
                    <FormHelperText>
                      Digital rectal examination (DRE) is a clinical examination
                      of the prostate gland.
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid className={classes.margin} item xs={12}>
                  <TextField
                    label="3. TRUS Volume"
                    name="TRUS_volume"
                    required="true"
                    type="number"
                    helperText="TRUS Volume is prostate volume measured by TRUS, an ultrasound technique that is used to view a man's prostate and surrounding tissues"
                    inputProps={{
                      min: 0,
                      max: 1000,
                      step: 0.01,
                    }}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid className={classes.margin} item xs={12}>
                  <FormControl required="true" component="fieldset">
                    <FormLabel>4. TRUS Lesion</FormLabel>
                    <RadioGroup
                      column
                      name="TRUS_Lesion"
                      onChange={handleInput}
                    >
                      <FormControlLabel
                        value="true"
                        control={<Radio required="true" color="primary" />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="false"
                        control={<Radio color="secondary" />}
                        label="No"
                      />
                    </RadioGroup>
                    <FormHelperText>
                      Any abnormal lesion in the prostate gland which is
                      visualised upon TRUS.
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Button color="primary" type="submit" variant="contained">
                  <p>Predict&nbsp;&nbsp;</p>
                  <Send />
                </Button>
                <Typography>{loading ? "   Loading..." : ""}</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Typography variant="h6">
                  <p>Prediction</p>
                </Typography>
                <Typography>
                  Risk of getting Prostate Cancer:
                  <br />
                  <p>{result.bin}%</p>
                </Typography>
                <Typography>
                  Risk of getting High-Grade Prostate Cancer:
                  <br />
                  <p>{result.sign}%</p>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
