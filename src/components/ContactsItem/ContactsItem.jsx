import PropTypes from 'prop-types';
import css from 'components/ContactsItem/ContactsItem.module.css';

export const ContactsItem = ({ name, number, deleteContact }) => (
  <li className={css.contacts__item}>
    <p>
      {name}: {number}
    </p>
    <button className={css.contacts__btn} onClick={deleteContact}>
      Delete
    </button>
  </li>
);

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
