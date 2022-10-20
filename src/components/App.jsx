import { useState } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import Filter from './Filter/Filter';
import Contacts from 'components/Contacts';
import useLocalStorage from 'Hooks';

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
      <Section title={'Phonebook'}>
        <Phonebook onSubmit={formSubmitHandler} />
      </Section>
      <Section title={'Contacts'}>
        <Filter value={filter} changeFilter={changeFilter} />
        <Contacts
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>
    </>
  );
};
