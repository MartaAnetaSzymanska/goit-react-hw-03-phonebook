import PropTypes from "prop-types";
import { ContactItem } from "../ContactItem/ContactItem";

export const ContactList = ({ filterContact, deleteContact }) => {
  const filteredContacts = filterContact();
  return (
    <ul>
      {filteredContacts.map((filteredContact) => (
        <ContactItem
          key={filteredContact.id}
          filteredContact={filteredContact}
          deleteContact={deleteContact}></ContactItem>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  filterContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
