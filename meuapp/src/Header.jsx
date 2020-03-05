import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(3)
  },
  teste: { marginRight: 100, display: "flex" },
  title: {
    flexGrow: 1,
    fontWeight: "bold"
  },
  subTitle: {
    marginLeft: 12
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position='static'>
        <Toolbar className={classes.root}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.teste}>
            <Typography variant='h5' className={classes.title}>
              Titulo Grande -
            </Typography>
            <Typography variant='h5' className={classes.subTitle}>
              Titulo pequeno
            </Typography>
          </div>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
