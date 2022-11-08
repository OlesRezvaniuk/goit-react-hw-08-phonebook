import React from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RegisterPage } from 'Pages/RegisterPage';
import { LoginPage } from 'Pages/LoginPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Phonebook />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
};
