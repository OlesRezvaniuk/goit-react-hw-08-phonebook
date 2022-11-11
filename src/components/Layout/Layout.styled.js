import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  box-shadow: 0px 0px 10px black;
  background-color: white;
  height: 44px;
  margin-bottom: 10px;
`;

export const HeaderContainer = styled.div`
  width: 320px;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 640px) {
    width: 640px;
  }
  margin: auto;
  display: flex;
  padding: 0 15px;
  position: relative;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  padding-left: 7px;
  width: 30px;
`;

export const Logo = styled.p`
  position: relative;
  margin-right: 20px;
  z-index: 10;
  font-size: 33px;
  font-weight: bold;
  bottom: -2px;

  ::before {
    position: absolute;
    content: '';
    height: 32px;
    width: 32px;
    left: -7px;
    bottom: 6px;
    background-color: #5b8bed;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: -1;
    background-image: linear-gradient(#a7c4ff, #0353a1);
  }
`;

export const LinkBox = styled.div`
  display: flex;
  margin-left: auto;
  gap: 10px;
  display: flex;
  margin-left: auto;
`;

export const PageLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  display: inline-flex;
  border-radius: 4px;
  height: 24px;
  padding: 3px 3px 5px 3px;
  font-weight: 500;
  font-size: 18px;
  color: grey;
  &:hover,
  &:focus {
    color: #464646;
  }
  &.active {
    border: 1px solid #81a9d0;
    color: #81a9d0;
`;

export const LeaveBtn = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  box-shadow: 0px 0px 4px grey;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  transition: 250ms;
  &:hover,
  &:focus {
    color: grey;
    box-shadow: 0px 0px 4px black;
  }
`;

export const BtnIcon = styled.img`
  position: relative;
  width: 18px;
      bottom: -1px;
    left: 1px;
}
`;

export const LinkContacts = styled(Link)`
  text-decoration: none;
  border-radius: 4px;
  display: block;
  height: 26px;
  margin-left: 10px;
  padding: 3px 3px 3px 3px;
  font-weight: 600;
  font-size: 18px;
  color: #3c67c3;
  transition: 250ms;
  &:hover,
  &:focus {
    color: black;
  }
`;

export const LoginName = styled.p`
  display: flex;
  align-items: center;
  font-weight: 500;
  pointer-events: none;
`;
