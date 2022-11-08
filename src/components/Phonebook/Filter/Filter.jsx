import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilterAction } from 'redux/Phonebook/filterSlice';
import { getFilter } from 'redux/Phonebook/Selector';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const handleFilter = e => {
    dispatch(changeFilterAction(e.currentTarget.value));
  };
  return (
    <>
      <br />
      <label className={css.filter__label}>
        <span className={css.filter__text}>Filter</span>
        <input
          className={css.filter__input}
          type="text"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </>
  );
};
