import PropTypes from 'prop-types';
import css from 'components/ContactsList/ContactsList.module.css';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contacts__list}>
    {contacts.map(({ id, name, number }) => (
      <ContactsItem
        key={id}
        name={name}
        number={number}
        deleteContact={() => onDeleteContact(id)}
      />
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
