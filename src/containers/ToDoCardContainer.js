import React from "react";
import ToDoCard from "../components/ToDoCard";

import { makeStyles } from "@material-ui/core/styles";
import { List, Divider, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function ToDoCardContainer(props) {
  const classes = useStyles();

  function renderUrls() {
    let uiItems = [];
    props.cards.forEach((card, index) => {
      if (index) {
        uiItems.push(<Divider component="li" />);
      }
      uiItems.push(
        <ToDoCard
          key={card.id}
          handleClickList={props.handleClickList}
          addList={props.addList}
          card={card}
        />
      );
    });

    return uiItems;
  }

  return (
    <Card
      style={{ width: "800px", minWidth: "800px", marginBottom: "20px" }}
      variant="outlined"
    >
      <List className={classes.root}>{renderUrls()}</List>
    </Card>
  );
}

export default ToDoCardContainer;
