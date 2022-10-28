import { useDispatch } from 'react-redux';
import { changeFilter, getFilterQuery } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import css from 'components/Filter/Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterQuery);

  const handleFilterChange = e => {
    const query = e.currentTarget.value;
    console.log(query);
    dispatch(changeFilter(query));
  };

  return (
    <div className={css.filter}>
      <label className={css.filter__label}>
        {'Find contacts by name'}
        <input
          className={css.filter__input}
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};
