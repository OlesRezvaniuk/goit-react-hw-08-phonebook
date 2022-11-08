import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios.get(
    `https://6367f6ead1d09a8fa61e62e4.mockapi.io/contacts`
  );
  return data;
};
export const addContact = async contact => {
  const { data } = await axios.post(
    `https://6367f6ead1d09a8fa61e62e4.mockapi.io/contacts`
  );
  return data;
};
export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://6367f6ead1d09a8fa61e62e4.mockapi.io/contacts/${id}`
  );
  return data;
};
