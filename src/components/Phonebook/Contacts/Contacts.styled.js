import styled from '@emotion/styled';

export const ContactsTitle = styled.h2`
  display: block;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 20px;
  color: #434343;
  margin-bottom: 10px;
`;
export const ContactsNone = styled.h2`
  font-size: 16px;
  // text-transform: uppercase;
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
  color: #4a4a4a;
  font-size: 16px;
  margin-left: 15px;
`;

export const ContactItem = styled.li`
  align-items: center;
  display: flex;

  display: flex;
  text-align: start;
  padding: 4px;
  border-radius: 2px;
  &:nth-of-type(odd) {
    background-color: #81a9d038;
  }
`;

export const ContactTel = styled.span`
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 500;
  margin: auto;
  right: 10px;
`;

export const ContactBtn = styled.button`
  margin-left: auto;
    border: none;
  border-radius: 2px;
  background-color: white;
  box-shadow:  0px 0px 2px 0px #81a9d0;
  height: 24px;;
  padding: 0px 5px;
  background-color: white;
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  color: #81a9d0;
    transition: 250ms;
    font-size: 14px;
    font-weight: 700;
    // text-transform: uppercase;
  
  &:hover {
  box-shadow: inset 0px 0px 2px 0px #81a9d0;
`;
