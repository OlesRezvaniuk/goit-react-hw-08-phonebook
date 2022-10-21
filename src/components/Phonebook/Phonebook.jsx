import { clear } from '@testing-library/user-event/dist/clear';
import { Component } from 'react';
import shortid from 'shortid';

export class Phonebook extends Component {
  //   state = {
  //     contacts: [],
  //     name: '',
  //     number: '',
  //     filter: '',
  //   };

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
    console.log(this.state.filter);
    console.log(this.state.contacts.includes(this.state.filter));
  };

  // visibleContacts() {
  //   this.setState.contacts.filter(contact =>
  //     contact.text.toLowerCase().includes(this.state.filter.toLowerCase())
  //   );
  // }

  handleNameAdd = e => {
    console.log(e.currentTarget.value);
    e.preventDefault();
    const { name } = this.state;
    const { number } = this.state;
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number, id: shortid() }],
    }));
  };

  render() {
    const filteredUsers = this.state.contacts.filter(user =>
      user.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <>
        <h1>Phonebook</h1>
        <form>
          <label>
            Name
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
          <br />
          <label>
            Phone
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.phone}
              onChange={this.handleIncrementPhone}
            />
          </label>
        </form>
        <button onClick={this.handleNameAdd} type="submit">
          Add contact
        </button>
        <br />
        <label>
          Filter
          <input
            type="text"
            value={this.state.filter}
            onChange={this.changeFilter}
          />
        </label>
        <h2>Contacts</h2>
        <ul>
          {filteredUsers.map(item => {
            return (
              <li key={item.id}>
                <h3>
                  {item.name} : <span>{item.number}</span>
                </h3>
              </li>
            );
          })}
        </ul>
      </>
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
