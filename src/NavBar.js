import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { GoogleLogout } from "react-google-login";
import About from './About';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const onSuccess = (res) => {
    console.log("Logout made successfully");
    alert("Logout made successfully ✌");
    props.history.push("/");
  };
  const clientId =
    "794363678933-27lpqhp3rr8mui0nqllau2kfncuf8bdk.apps.googleusercontent.com";

  return (
    <div className={(classes.root, "dafas")}>
      <About/>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Collegify
          </Typography>
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
          ></GoogleLogout>
          <Button color="inherit">
            <ExitToAppIcon>Logout</ExitToAppIcon>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
