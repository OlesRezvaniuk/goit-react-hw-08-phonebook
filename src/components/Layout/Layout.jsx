import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/RepetaApi';

export const Layout = () => {
  const isLoggin = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  console.log(isLoggin);
  const handleLogOutButton = () => {
    dispatch(authOperations.register({ name: '', email: '', password: '' }));
  };
  return (
    <>
      <header>
        <Link to="/">phonebook</Link>
        {isLoggin || (
          <>
            Sing Up
            <Link to="/login">
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
          <button onClick={handleLogOutButton}>
            Log Out
            <img
              width="20px"
              alt="logOut-icon"
              src="	https://vershinaguamka.ru/imgs/rools/271-2715393_logout.png"
            ></img>
          </button>
        )}
      </header>
      <Outlet />
    </>
  );
};
