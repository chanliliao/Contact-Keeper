import React, { useReducer } from 'react';
import AuthContext from '../contact/authContext';
import AuthReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // // load user
  // const loadUser = () => {
  //   dispatch({ type: USER_LOADED, payload:  });
  // };

  // // register user
  // const registerUser = () => {
  //   dispatch({ type: DELETE_CONTACT, payload:  });
  // };

  // // login user
  // const loginUser = () => {
  //   dispatch({ type: DELETE_CONTACT, payload:  });
  // };

  // // logout
  // const logout = () => {
  //   dispatch({ type: LOGOUT, payload:  });
  // };

  // // clear error
  // const clearError = () => {
  //   dispatch({ type: CLEAR_ERRORS, payload:  });
  // };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        loadUser,
        registerUser,
        loginUser,
        logout,
        clearError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
