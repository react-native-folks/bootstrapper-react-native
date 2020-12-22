import React from 'react';
import Login from 'app/screens/Auth/screens/Login';
import SignUp from 'app/screens/Auth/screens/SignUp';

const AuthStack = () => (
  <>
    {Login()}
    {SignUp()}
  </>
);

export default AuthStack;
