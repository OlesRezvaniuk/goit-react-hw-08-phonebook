import styled from '@emotion/styled';

export const FormTitle = styled.h1`
  color: #434343;
  margin-bottom: 15px;
`;

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FormLabel = styled.label`
  display: block;
  background: white;
  width: 100%;
  padding: 4px;
  box-shadow: inset 0px 0px 2px #81a9d0;
  border-radius: 2px;
  transition: 250ms;
  &:hover {
    box-shadow: inset 0px 0px 4px 0px #81a9d0;
  }
`;

export const FormElName = styled.span`
  position: absolute;
  left: 0px;
  display: flex;
  height: 23.5px;
  align-items: center;
  top: 0px;
  background-color: #81a9d0;
  width: 50px;
  justify-content: center;
  transition: 250ms;
  font-size: 14px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

export const FormInput = styled.input`
  poisition: relative;
  display: block;
  border: none;
  outline: none;
  margin-left: 47px;
  width: inherit;
  width: 205px;
  padding-left: 5px;
  cursor: pointer;
  color: #81a9d0;
  font-weight: 700;
`;
