import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">phonebook</Link>
        <Link to="/login">Sing In</Link>
        <Link to="/register">Sing Up</Link>
      </header>
      <Outlet />
    </>
  );
};
