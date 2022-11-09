import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/RepetaApi';

export const Layout = () => {
  const dispatch = useDispatch();
  const isLoggin = useSelector(state => state.auth.isLoggedIn);
  const userName = useSelector(state => state.auth.user.name);
  // const userToken = useSelector(state => state.auth.token);

  const handleLogOutButton = () => {
    dispatch(authOperations.register({ name: '', email: '', password: '' }));
  };
  return (
    <>
      <header style={{ display: 'flex' }}>
        <Link to="/">phonebook</Link>
        {isLoggin || (
          <>
            <Link to="/login">
              Sing Up
              <img
                width="20px"
                alt="logOut-icon"
                src="	https://vershinaguamka.ru/imgs/rools/271-2715393_login.png"
              ></img>
            </Link>
            <Link to="/register">Sing Up</Link>
          </>
        )}

        {isLoggin && (
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
      </header>
      <Outlet />
    </>
  );
};
