import { useSelector } from 'react-redux';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { getContacts, getFilterQuery } from 'redux/selectors';
import css from 'components/ContactsList/ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterQuery);
  console.log(contacts);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  return (
    <ul className={css.contacts__list}>
      {visibleContacts(contacts).map(({ id, name, number }) => (
        <ContactsItem key={id} contactId={id} name={name} number={number} />
      ))}
    </ul>
  );
};
