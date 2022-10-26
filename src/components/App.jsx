import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout/Layout';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import useLocalStorage from 'hooks';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = ({ name, number }) => {
    const id = nanoid(5);
    const contact = {
      id,
      name,
      number,
    };

    const checkedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    checkedContact
      ? alert(`${name} is already in contacts`)
      : setContacts(contacts => [contact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <>
      <Layout>
        <ContactsForm onSubmit={formSubmitHandler} />
        <Filter value={filter} changeFilter={changeFilter} />
        <ContactsList />
      </Layout>
    </>
  );
};
