import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.module.css';

const Filter = ({ value, changeFilter }) => (
  <div className={css.filter}>
    <label className={css.filter__label}>
      {'Find contacts by name'}
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        value={value}
        onChange={changeFilter}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
