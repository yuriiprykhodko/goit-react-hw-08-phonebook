import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import styles from "./ContactsListItem.module.css";
import DeleteIcon from "@material-ui/icons/Delete";

import { contactsSelection, contactsOperations } from "redux/contacts";
const ContactsListItem = () => {
  const visibleContacts = useSelector(contactsSelection.getVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  const onDeleteButtonClick = (id) =>
    dispatch(contactsOperations.deleteContact(id));

  return (
    visibleContacts.map(({ id, name, number }) => (
      <ListItem button key={id}>
        <ListItemIcon>
          <PhoneIcon />
        </ListItemIcon>
        <ListItemText>
          <span className={styles.name}>{`${name}:`}</span>
          <span className={styles.number}>{number}</span>
        </ListItemText>
        <IconButton
          color="primary"
          aria-label="delete"
          onClick={() => onDeleteButtonClick(id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    ))
  );
};

export default ContactsListItem;