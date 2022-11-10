import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/RepetaApi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = useSelector(state => state.auth.token);

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };
  const handleEmailChange = e => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {token ? (
        <p>
          You are already sing up, <Link to="/contacts">to Contacts</Link>
        </p>
      ) : (
        <>
          {' '}
          <h1>Create your account</h1>
          <form onSubmit={handleSubmit}>
            <label name="name" type="name">
              <span>Name</span>
              <input
                placeholder="Your name"
                aria-label="Input for your name"
                onChange={handleNameChange}
                value={name}
              />
            </label>
            <br />
            <label>
              <span>Email</span>
              <input
                name="email"
                variant="standard"
                placeholder="Your e-mail"
                aria-label="Input for your email"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <br />
            <label>
              <span>Password</span>
              <input
                name="password"
                placeholder="Should be at least 7 characters"
                aria-label="Input for your password"
                type="password"
                variant="standard"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <br />
            <button>Sing Up</button>
          </form>
        </>
      )}
    </>
  );
};
