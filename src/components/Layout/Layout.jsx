import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/RepetaApi';
import {
  Header,
  HeaderContainer,
  Logo,
  LinkStyled,
  LinkBox,
  PageLinks,
  LeaveBtn,
  LinkContacts,
  LoginName,
  BtnIcon,
} from './Layout.styled';

export const Layout = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const userName = useSelector(state => state.auth.user.name);

  const handleLogOutButton = () => {
    dispatch(authOperations.logout());
  };
  return (
    <>
      <Header style={{ display: 'flex' }}>
        <HeaderContainer>
          <LinkStyled to="/">
            <Logo>P</Logo>
          </LinkStyled>

          {token && <LinkContacts to="/contacts">Contacts</LinkContacts>}
          {token === null ? (
            <LinkBox>
              <PageLinks style={{ border: 'none' }} to="/login">
                Sing In
              </PageLinks>
              <PageLinks to="/register">Sing Up</PageLinks>
            </LinkBox>
          ) : (
            <div style={{ display: 'flex', marginLeft: 'auto' }}>
              <LoginName>{userName}</LoginName>
              <LeaveBtn onClick={handleLogOutButton}>
                <BtnIcon
                  alt="logOut-icon"
                  src="	https://vershinaguamka.ru/imgs/rools/271-2715393_logout.png"
                ></BtnIcon>
              </LeaveBtn>
            </div>
          )}
        </HeaderContainer>
      </Header>
      <Outlet />
    </>
  );
};
