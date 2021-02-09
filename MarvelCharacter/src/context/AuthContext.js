import React from 'react';
export const LoginContext = React.createContext();

const AuthContext = ({children}) => {
  const initialState = {
    userName: null,
    userToken: null,
  };
  const [isLogin, setIsLogin] = React.useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case 'signIn':
        return {
          ...state,
          userName: action.id,
          userToken: action.token,
        };
    }
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const authContext = React.useMemo(() => ({
    signIn: (username, password) => {
      let userToken;
      if (username === 'user' && password === 'password') {
        userToken = 'LOGIN_SUCCESSFULL';
        setIsLogin(true);
      }
      dispatch({type: 'signIn', id: null, token: userToken});
    },
    isLogin,
  }));
  console.log(state);
  return (
    <LoginContext.Provider value={authContext}>
      {children}
    </LoginContext.Provider>
  );
};

export default AuthContext;
