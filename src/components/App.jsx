import { Component } from "react";
import { Form } from "./Form/Form";
import { nanoid } from "nanoid";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  setFilter = (filterValue) => {
    this.setState({ filter: filterValue });
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterLowerCase),
    );
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <Form contacts={contacts} addContact={this.addContact}></Form>
        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={this.setFilter}></Filter>
        <ContactList
          filterContact={this.filterContact}
          deleteContact={this.deleteContact}></ContactList>
      </>
    );
  }
}
