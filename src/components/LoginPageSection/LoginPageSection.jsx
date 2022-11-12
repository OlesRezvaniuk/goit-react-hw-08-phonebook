import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/connections-api.herokuapp';
import {
  Container,
  Title,
  FormEl,
  FormLabel,
  FormElName,
  FormInput,
  RemoveBtn,
} from './LoginPageSection.styled';

export const LoginPageSection = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <Container>
      <Title>Log in to Phonebook</Title>
      <FormEl onSubmit={handleLoginSubmit}>
        <FormLabel>
          <FormElName>Email</FormElName>
          <FormInput
            type="email"
            name="email"
            placeholder="Your e-mail"
            aria-label="Input for your email"
            onChange={handleEmailLogin}
            value={email}
          />
        </FormLabel>

        <FormLabel>
          <FormElName>Password</FormElName>
          <FormInput
            type="password"
            name="password"
            placeholder="Your password"
            aria-label="Input for your password"
            onChange={handlePasswordLogin}
            value={password}
          />
        </FormLabel>
        <RemoveBtn>Log in</RemoveBtn>
      </FormEl>
    </Container>
  );
};
