import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../RepetaApi';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.name);
  };
  const handleEmailChange = e => {
    setEmail(e.currentTarget.name);
  };
  const handlePasswordChange = e => {
    setPassword(e.currentTarget.name);
  };

  return <></>;
};
