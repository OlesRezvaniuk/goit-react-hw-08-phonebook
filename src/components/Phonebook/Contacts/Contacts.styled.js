import styled from '@emotion/styled';

export const ContactsTitle = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 20px;
  color: white;
  margin-bottom: 5px;
`;

export const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const ContactName = styled.h3`
  color: white;
  font-size: 14px;
  margin-left: 15px;
`;

export const ContactItem = styled.li`
  display: flex;
  text-align: start;
  padding: 2px;
  border-radius: 2px;
  &:nth-of-type(odd) {
    background-color: #ffffff21;
  }
`;

export const ContactTel = styled.span`
  color: white;
  font-size: 12px;
  font-weight: 700;
  margin: auto;
  right: 10px;
`;

export const ContactBtn = styled.button`
  margin-left: auto;
    border: none;
  border-radius: 2px;
  background-color: white;
  box-shadow: inset 0px 0px 0px 0px #81a9d0;
  height: 16.5px;;
  padding: 0px 5px;
  background-color: white;
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  color: #81a9d0;
    transition: 250ms;
    font-size: 10px;
    font-weight: 700;
    // text-transform: uppercase;
  
  &:hover {
  box-shadow: inset 0px 0px 4px 0px #81a9d0;
`;
