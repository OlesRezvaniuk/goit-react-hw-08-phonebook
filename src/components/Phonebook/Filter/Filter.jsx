import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const Filter = ({ onChangeFilter }) => {
  const contactsFilter = useSelector(state => state.contacts.filter);
  console.log(contactsFilter);
  return (
    <>
      <br />
      <label className={css.filter__label}>
        <span className={css.filter__text}>Filter</span>
        <input
          className={css.filter__input}
          type="text"
          value={contactsFilter}
          onChange={onChangeFilter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
