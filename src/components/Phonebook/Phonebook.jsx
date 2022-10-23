// import { clear } from '@testing-library/user-event/dist/clear';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Component } from 'react';
import shortid from 'shortid';
import { Form } from './Form/Form';
import { AddButton } from './AddButton/AddButton';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { PhoneBookBox } from './Phonebook.styled';

export class Phonebook extends Component {
  state = {
    contacts: [],
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
    e.preventDefault();
    const { name, number, contacts } = this.state;
    const newName = {
      name,
      number,
      id: shortid(),
    };
    if (name === '') {
      Notify.failure('You didnt enter a name');
      return;
    } else if (number === '') {
      Notify.failure('You didnt enter a number');
      return;
    }

    if (contacts.some(contact => contact.name === name)) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }
    if (contacts.some(contact => contact.number === number)) {
      const filteredNumber = contacts.filter(
        contact => contact.number === number
      )[0].name;
      Notify.failure(`${number} is already in contact with ${filteredNumber} `);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newName],
    }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  deleteContact = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ ...this.state, contacts: newContacts });
  };

  render() {
    const filteredUsers = this.state.contacts.filter(user =>
      user.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    const length = this.state.contacts.length;
    return (
      <PhoneBookBox>
        <Form
          onName={this.state.name}
          onPhone={this.state.number}
          onHandleIncrement={this.handleIncrement}
          onHandleIncrementPhone={this.handleIncrementPhone}
        />

        {/* <h1>
          <span style={{ color: '#3a72a9' }}>p</span>honebook
        </h1>
        <form>
          <label style={{ position: 'relative' }}>
            <span>Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleIncrement}
            />
          </label>
          <label style={{ position: 'relative' }}>
            <span>Phone</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleIncrementPhone}
            />
          </label>
        </form> */}
        <AddButton onhandleNameAdd={this.handleNameAdd} />
        <Filter
          onFilter={this.state.filter}
          onChangeFilter={this.changeFilter}
        />
        <Contacts
          onFilteredUers={filteredUsers}
          onDeleteContact={this.deleteContact}
          onLength={length}
        />
      </PhoneBookBox>
    );
  }
}
