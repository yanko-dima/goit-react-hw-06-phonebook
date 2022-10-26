import { useSelector } from 'react-redux';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { getContacts } from 'redux/selectors';
import css from 'components/ContactsList/ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);

  return (
    <ul className={css.contacts__list}>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id} contactId={id} name={name} number={number} />
      ))}
    </ul>
  );
};
