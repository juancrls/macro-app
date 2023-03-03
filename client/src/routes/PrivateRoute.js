import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Login from './Login';

export default function PrivateRoute() {
  const user = false;

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}