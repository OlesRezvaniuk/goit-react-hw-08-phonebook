import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  box-shadow: 0px 0px 10px black;
  background-color: white;
  height: 44px;
`;

export const HeaderContainer = styled.div`
  width: 290px;
  margin: auto;
  display: flex;
  padding: 0 15px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 7px;
`;

export const Logo = styled.p`
  position: relative;
  margin-right: 20px;
  z-index: 10;
  font-size: 30px;
  font-weight: bold;
  bottom: -2px;

  ::before {
    position: absolute;
    content: '';
    height: 30px;
    width: 30px;
    left: -7px;
    bottom: 5px;
    background-color: #5b8bed;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: -1;
    background-image: linear-gradient(#a7c4ff, #2660d9);
  }
`;
