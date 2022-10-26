import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from 'components/ContactsItem/ContactsItem.module.css';

export const ContactsItem = ({ contactId, name, number }) => {
  const dispatch = useDispatch();
  const normaliseName = `${name[0].toUpperCase()}${name.slice(1)}`;

  const handleDelete = () => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={css.contacts__item}>
      <div className={css.wrapper}>
        <p className={css.text}>
          Name: {normaliseName} | Phone: {number}
        </p>
        <button className={css.btn} onClick={handleDelete}>
          <MdClose size={24} />
        </button>
      </div>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
