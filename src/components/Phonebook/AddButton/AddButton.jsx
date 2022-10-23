import { AddBtn, AddBtnText } from './AddButton.styled';
import PropTypes from 'prop-types';

export const AddButton = ({ onhandleNameAdd }) => {
  return (
    <>
      <AddBtn onClick={onhandleNameAdd} type="submit">
        <AddBtnText>Add</AddBtnText>
        <AddBtnText> contact</AddBtnText>
      </AddBtn>
    </>
  );
};

AddButton.propTypes = {
  onhandleNameAdd: PropTypes.func,
};
