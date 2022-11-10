import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/RepetaApi';
import { Header, HeaderContainer, Logo, LinkStyled } from './Layout.styled';

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

          {token && <Link to="/contacts">Contacts</Link>}
          {token === null ? (
            <>
              <Link to="/login">
                Sing In
                <img
                  width="20px"
                  alt="logOut-icon"
                  src="	https://vershinaguamka.ru/imgs/rools/271-2715393_login.png"
                ></img>
              </Link>
              <Link to="/register">Sing Up</Link>
            </>
          ) : (
            <div style={{ display: 'flex' }}>
              <p>{`Wellcome, ${userName}`}</p>
              <button onClick={handleLogOutButton}>
                <img
                  width="20px"
                  alt="logOut-icon"
                  src="	https://vershinaguamka.ru/imgs/rools/271-2715393_logout.png"
                ></img>
              </button>
            </div>
          )}
        </HeaderContainer>
      </Header>
      <Outlet />
    </>
  );
};
