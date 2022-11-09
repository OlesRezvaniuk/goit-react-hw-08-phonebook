import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/RepetaApi';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  );
};
