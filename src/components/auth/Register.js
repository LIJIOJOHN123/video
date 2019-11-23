import React, { Fragment } from "react";
import { Grid, TextField, Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const userStyle = makeStyles(theme => ({
  outline: {
    padding: 10
  },
  center: {
    paddingLeft: "30%"
  }
}));
const Register = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    userName: "",
    password: ""
  });
  const { name, userName, password } = formData;
  const handleChanges = name => e => {
    setFormData({ ...formData, [name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  const classes = userStyle();
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Paper className={classes.outline}>
            <Typography variant="h4" className={classes.center}>
              Register
            </Typography>
            <TextField
              required
              id="filled-required"
              value={name}
              onChange={handleChanges("name")}
              label="Name"
              margin="normal"
              variant="outlined"
              fullWidth
              autoFocus
            />
            <TextField
              required
              id="outlined-required"
              onChange={handleChanges("userName")}
              value={userName}
              label="User Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              onChange={handleChanges("password")}
              value={password}
              label="Password"
              fullWidth
              margin="normal"
              variant="outlined"
            />

            <div className={classes.center}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                color="primary"
              >
                Register
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Register;
