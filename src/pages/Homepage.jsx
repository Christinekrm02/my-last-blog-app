import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// eslint-disable-next-line no-unused-vars
import { CssBaseline, IconButton } from "@material-ui/core";
import  KeyboardArrowDownIcon  from "@material-ui/icons/KeyboardArrowDown";
import Collapse from "@material-ui/core/Collapse";

import Header from "../components/Header.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Ubuntu, sans-serif",
  },
  articleTitleContainer: {
    textAlign: "center",
  },
  articleTitle: {
    color: "#8A2BE2",
    fontSize: "75px",
    textShadow: "5px 5px 4px #9c689c",
  },
  downIcon: {
    marginTop: "-10px",
    color: "#8A2BE2",
    fontSize: "5rem",
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      {/* eliminate padding and margin */}
      <CssBaseline />
      <Header />
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        collapsedHeight={50}>
        <div className={classes.articleTitleContainer}>
          <h1 className={classes.articleTitle}>Build Your Very Own Blog App</h1>
          <IconButton>
            <KeyboardArrowDownIcon className={classes.downIcon} />
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
}

