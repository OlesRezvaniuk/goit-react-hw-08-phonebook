import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/connections-api.herokuapp';
import { selectorToken, selectorUserName } from 'redux/Auth/Selectors';
import {
  Container,
  Title,
  FormEl,
  FormLabel,
  FormElName,
  FormInput,
  RemoveBtn,
} from './RegisterPage.styled';

export const RegisterPageSection = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = useSelector(selectorToken);
  const userName = useSelector(selectorUserName);

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
    if (token === null || userName === undefined) {
      dispatch(authOperations.register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    }
  };
  return (
    <Container>
      <Title>Create your account</Title>
      <FormEl onSubmit={handleSubmit}>
        <FormLabel name="name" type="name">
          <FormElName>Name</FormElName>
          <FormInput
            placeholder="Your name"
            aria-label="Input for your name"
            onChange={handleNameChange}
            value={name}
          />
        </FormLabel>
        <FormLabel>
          <FormElName>Email</FormElName>
          <FormInput
            name="email"
            variant="standard"
            placeholder="Your e-mail"
            aria-label="Input for your email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </FormLabel>
        <FormLabel>
          <FormElName>Password</FormElName>
          <FormInput
            name="password"
            placeholder="Enter your password"
            aria-label="Input for your password"
            type="password"
            variant="standard"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormLabel>
        <RemoveBtn>Sing Up</RemoveBtn>
      </FormEl>
    </Container>
  );
};
