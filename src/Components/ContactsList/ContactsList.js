
import styles from "./ContactsList.module.css";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";


const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 400,
  },
}));

export default function ContactsList({ children }) {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${styles.list}`}>
      <List component="nav" aria-label="main mailbox folders">
        {children}
      </List>
    </div>
  );
}