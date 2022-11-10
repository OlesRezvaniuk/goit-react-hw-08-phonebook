import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/RepetaApi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = useSelector(state => state.auth.token);

  const handleEmailLogin = e => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordLogin = e => {
    setPassword(e.currentTarget.value);
  };
  const handleLoginSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <>
      {token ? (
        <p>
          You are already sing in, <Link to="/contacts">to Contacts</Link>
        </p>
      ) : (
        <>
          <h1>Log in to Phonebook</h1>

          <form onSubmit={handleLoginSubmit}>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="Your e-mail"
                aria-label="Input for your email"
                onChange={handleEmailLogin}
                value={email}
              />
            </label>

            <br />
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                aria-label="Input for your password"
                onChange={handlePasswordLogin}
                value={password}
              />
            </label>
            <br />
            <button>Log in</button>
          </form>
        </>
      )}
    </>
  );
};
