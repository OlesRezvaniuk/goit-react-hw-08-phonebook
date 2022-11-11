import styled from '@emotion/styled';

export const Container = styled.div`
  width: 320px;
  margin: auto;
  padding: 15px;
  display: block;
  text-align: start;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  color: #464646;
`;

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormLabel = styled.label`
  display: flex;
  background: white;
  width: 100%;
  padding: 4px;
  box-shadow: inset 0px 0px 2px #81a9d0;
  border-radius: 2px;
  transition: 250ms;
  height: 30px;

  &:hover {
    box-shadow: inset 0px 0px 4px 0px #81a9d0;
  }
`;

export const FormElName = styled.span`
  padding: 0px 4px;
  font-weight: 500;
  color: #727272;
  font-size: 16px;
  font-weight: 700;
`;

export const FormInput = styled.input`
  font-size: 16px;
  poisition: relative;
  display: block;
  border: none;
  outline: none;
  width: inherit;
  padding-left: 10px;
  cursor: pointer;
  color: #464646;
  font-weight: 700;
`;

export const RemoveBtn = styled.button`
font-weight: 600;
  border: none;
  border-radius: 2px;
  background-color: white;
  box-shadow: inset 0px 0px 0px 0px #81a9d0;
  height: 24px;
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
