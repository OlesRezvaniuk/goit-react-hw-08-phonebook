import React from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Phonebook />} />
          <Route path="/register" element={<div>register page </div>} />
          <Route path="/login" element={<div>Login page </div>} />
        </Route>
      </Routes>
    </>
  );
};
