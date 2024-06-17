import { Component } from "react";
import { nanoid } from "nanoid";
import styles from "./Form.module.scss";
import PropTypes from "prop-types";

export class Form extends Component {
  // add props from App.jsx
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, number } = this.state;
    // check if contact exists
    const isContactExist = this.props.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (isContactExist) {
      alert(`Contact with the name: ${name} already exists.`);
    } else {
      this.props.addContact(name, number);
      this.setState({ name: "", number: "" });
    }
  };

  render() {
    const nameId = nanoid();
    const numId = nanoid();
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor={nameId} className={styles.label}>
          Name
          <input
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}></input>
        </label>
        <label htmlFor={numId} className={styles.label}>
          Number
          <input
            id={numId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}></input>
        </label>
        <button type="submit" className={styles.formButton}>
          Add contact
        </button>
      </form>
    );
  }
}
