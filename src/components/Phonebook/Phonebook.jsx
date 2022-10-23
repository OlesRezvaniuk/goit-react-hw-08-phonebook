// import { clear } from '@testing-library/user-event/dist/clear';
import { Component } from 'react';
import shortid from 'shortid';
import { Form } from './Form/Form';
import { AddButton } from './AddButton/AddButton';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { PhoneBookBox } from './Phonebook.styled';

export class Phonebook extends Component {
  //   state = {
  //     contacts: [],
  //     name: '',
  //     number: '',
  //     filter: '',
  //   };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleIncrement = e => {
    this.setState({ name: e.currentTarget.value });
  };
  handleIncrementPhone = e => {
    this.setState({ number: e.currentTarget.value });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleNameAdd = e => {
    // console.log(e.currentTarget.value);
    e.preventDefault();
    const { name } = this.state;
    const { number } = this.state;
    const { contacts } = this.state;
    const newName = {
      name,
      number,
      id: shortid(),
    };
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some(contact => contact.number === number)) {
      const filteredNumber = contacts.filter(
        contact => contact.number === number
      )[0].name;
      alert(`${number} is already in contact with ${filteredNumber} `);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newName],
    }));
  };

  deleteContact = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ ...this.state, contacts: newContacts });
  };

  render() {
    // console.log(this.state.contacts);
    const filteredUsers = this.state.contacts.filter(user =>
      user.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <PhoneBookBox>
        <Form
          onName={this.state.name}
          onHandleIncrement={this.handleIncrement}
          onPhone={this.state.phone}
          onHandleIncrementPhone={this.handleIncrementPhone}
        />
        <AddButton onhandleNameAdd={this.handleNameAdd} />
        <Filter
          onFilter={this.state.filter}
          onChangeFilter={this.changeFilter}
        />
        <Contacts
          onFilteredUers={filteredUsers}
          onDeleteContact={this.deleteContact}
        />
      </PhoneBookBox>
    );
  }
}

// const contactsS = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// console.log(contactsS);

// function omg() {
//   contactsS.filter(contact =>
//     contact.name.toLowerCase().includes([0].name.dsas)
//   );
//   console.log(contactsS);
// }

// omg();

// visibleContacts() {
//   this.setState.contacts.filter(contact =>
//     contact.text.toLowerCase().includes(this.state.filter.toLowerCase())
//   );
// }
