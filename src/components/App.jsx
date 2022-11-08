import React from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RegisterPage } from 'Pages/RegisterPage';
import { LoginPage } from 'Pages/LoginPage';
import { HomePage } from 'Pages/HomePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<Phonebook />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
};
