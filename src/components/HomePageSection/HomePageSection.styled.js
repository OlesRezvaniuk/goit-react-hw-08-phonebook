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
  display: inline-block;
  color: #81a9d0;
  font-weight: 500;
  transition: 250ms;
  margin-bottom: 10px;
  &:hover,
  &:focus {
    color: #4f4c4c;
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
  margin-bottom: 10px;
  padding: 3px;
  border-radius: 3px;
  transition: 250ms;
  align-items: center;
  color: grey;
  font-weight: 600;
  box-shadow: 0px 0px 2px grey;
  color: black;

  &:hover,
  &:focus {
    box-shadow: inset 0px 0px 2px #81a9d0;
    color: #81a9d0;
  }
`;
