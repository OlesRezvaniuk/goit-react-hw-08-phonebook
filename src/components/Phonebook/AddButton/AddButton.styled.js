const { default: styled } = require('@emotion/styled');

export const AddBtn = styled.button`
  border: none;
  border-radius: 2px;
  background-color: white;
  box-shadow: inset 0px 0px 0px 0px #81a9d0;
  height: 23px;
  position: absolute;
  right: 15px;
  top: 124px;
  padding: 0px 5px;
  background-color: white;
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  color: #81a9d0;
  box-shadow: inset 0px 0px 2px #81a9d0;
    transition: 250ms;
  &:hover,
  &:focus {
  box-shadow: inset 0px 0px 4px #81a9d0;
`;

export const AddBtnText = styled.span`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 8px;
  color: inherit;
`;
