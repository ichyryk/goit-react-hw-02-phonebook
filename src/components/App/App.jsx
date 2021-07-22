import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from '../Form/Form';
import Wrapper from '../Wrapper/Wrapper';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import contactsList from '../data/contacts.json';

export default class App extends Component {
  state = {
    contacts: contactsList,
    filter: '',
  };

  formHandleSubmit = ({ name, id, number }) => {
    const entry = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, entry],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    // const filteredContacts = this.filterContactsByName(this.state.contacts);
    return (
      <Wrapper>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formHandleSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} />
      </Wrapper>
    );
  }
}
