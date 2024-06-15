import PropTypes from "prop-types";
import styles from "./ContactItem.module.scss";

export const ContactItem = ({ filteredContact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(filteredContact.id);
  };

  return (
    <li className={styles.contactListItem}>
      {filteredContact.name}: {filteredContact.number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
