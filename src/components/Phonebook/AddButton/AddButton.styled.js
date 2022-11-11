const { default: styled } = require('@emotion/styled');

export const AddBtn = styled.button`
font-weight: 600;
  border: none;
  border-radius: 2px;
  background-color: white;
  box-shadow: inset 0px 0px 0px 0px #81a9d0;
  height: 30px;
  margin-left: auto;
  right: 15px;
  top: 124px;
  padding: 0px 5px;
  background-color: white;
  display: flex;
  gap: 4px;
  
  align-items: center;
  cursor: pointer;
    color: #7e7e7e;
  box-shadow:  0px 0px 2px #81a9d0;
    transition: 250ms;
        font-size: 16px;
  &:hover,
  &:focus {
  box-shadow: inset 0px 0px 2px #81a9d0;
    color: #464646;
`;

export const AddBtnText = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: inherit;
`;
