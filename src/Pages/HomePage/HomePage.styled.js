import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PageTitle = styled.h1`
  color: #4f4c4c;
`;

export const Container = styled.div`
  width: 290px;
  margin: auto;
  padding: 15px;
  position: relative;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: 250ms;
  &:hover,
  &:focus {
    border-bottom: 1px solid grey;
  }
`;

export const ReactText = styled.span`
  display: block;
  font-weight: 400;
  margin-top: 5px;
`;

export const LinkStyledCont = styled(Link)`
  text-decoration: none;
  width: max-content;
  display: flex;
  margin: auto;
  margin-top: 5px;
  padding: 3px;
  border-radius: 3px;
  box-shadow: 0px 0px 2px grey;
  transition: 250ms;
  align-items: center;
  color: grey;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 4px grey;
    color: black;
  }
`;
