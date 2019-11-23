import React, { Fragment } from "react";
import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  TextField,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  outline: {
    padding: 10
  },
  center: {
    paddingLeft: "30%"
  }
}));

const Login = () => {
  const [formData, setFormData] = React.useState({
    userName: "",
    password: ""
  });
  const { userName, password } = formData;
  const handleChange = userName => e => {
    setFormData({ ...formData, [userName]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(formData);
  };

  const classes = useStyles();
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Paper className={classes.outline}>
            <Typography variant="h4" className={classes.center}>
              Login
            </Typography>
            <TextField
              required
              id="filled-required"
              value={userName}
              onChange={handleChange("userName")}
              label="User Name"
              margin="normal"
              variant="outlined"
              fullWidth
              autoFocus
            />
            <TextField
              required
              id="filled-required"
              onChange={handleChange("password")}
              value={password}
              label="Password"
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <div className={classes.center}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Login;
