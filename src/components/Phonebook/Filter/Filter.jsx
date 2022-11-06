import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContactAction } from 'redux/PhonebookSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const contactsFilter = useSelector(state => state.contacts.filter);

  const handleFilter = e => {
    dispatch(filterContactAction(e.currentTarget.value));
  };
  return (
    <>
      <br />
      <label className={css.filter__label}>
        <span className={css.filter__text}>Filter</span>
        <input
          className={css.filter__input}
          type="text"
          value={contactsFilter}
          onChange={handleFilter}
        />
      </label>
    </>
  );
};
