import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ onFilter, onChangeFilter }) => {
  return (
    <>
      <br />
      <label className={css.filter__label}>
        <span className={css.filter__text}>Filter</span>
        <input
          className={css.filter__input}
          type="text"
          value={onFilter}
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
