import { createStore } from 'redux';

const tokenKey = '_t';
const defaultStore = {
  appId:
    '730966416306-rcg0c33b4ivc3t9ofd5s61dd5uifl60t.apps.googleusercontent.com',
  endpoint:
    process.env.NODE_ENV === 'production'
      ? 'https://my-app-backend.herokuapp.com'
      : 'http://localhost:3000',
  loggedIn: false,
  token: undefined,
  userInfo: undefined
};

function reducer(state = defaultStore, action) {
  console.log("DISPATCHED:", action.type)
  switch (action.type) {
    case 'CHECK_TOKEN':
      const localToken = localStorage.getItem(tokenKey);
      return { ...state, token: localToken };
    case 'LOG_IN':
      const { token, userInfo } = action.payload;
      localStorage.setItem(tokenKey, token);
      return { ...state, userInfo, token, loggedIn: true };
    case 'LOG_OUT':
      localStorage.setItem(tokenKey, '');
      return {
        ...state,
        loggedIn: false,
        token: undefined,
        userInfo: undefined,
      };
    case 'SET_USER_INFO':
      return { ...state, userInfo: action.payload, loggedIn: true };
    default:
      return state;
  }
}

export const store = createStore(reducer, defaultStore);
