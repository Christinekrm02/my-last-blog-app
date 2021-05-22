import React from "react";
//MATERIAL UI
import {
  AppBar,
  makeStyles,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";

//NAVBAR
const navLinks = [
  { title: `Home`, path: `/` },
  { title: `About`, path: `/about` },
  { title: `Articles`, path: `/articles-list` },
];
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Ubuntu, sans-serif",
  },
  appbar: {
    background: "none",
  },
  appbarTitle: {
    flexGrow: "1",
    color: "#8A2BE2",
    fontSize: "4rem",
    justifyContent: "end",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0",
  },

  navbarContainer: {
    display: `flex`,
    justifyContent: `space-between`,
    maxWidth: "lg",
  },
  navItems: {
    display: `flex`,
    justifyContent: `flex-end`,
  },
  navLink: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    fontSize: "20px",
    color: `#8A2BE2`,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Container>
          <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>Dev.Admin</h1>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navItems}>
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.navLink}>
                  <ListItem button>
                    <ListItemText
                      primary={title}
                      className={classes.listItem}
                    />
                  </ListItem>
                </a>
              ))}
            </List>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
