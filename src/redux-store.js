import { createStore } from 'redux';

const tokenKey = '_t';
const defaultStore = {
  appId:
    '240075575983-v6lk702qaapea93k2641oh4fg6deeh8s.apps.googleusercontent.com',
  debug: true,
  endpoint:
    process.env.NODE_ENV === 'production'
      ? 'https://my-app-backend.herokuapp.com'
      : 'http://localhost:3000',
  gameState: undefined,
  loggedIn: false,
  pilotInfo: undefined,
  token: undefined,
  userInfo: undefined
};

function reducer(state = defaultStore, action) {
  if (state.debug) { console.log("DISPATCHED:", action.type, action.payload); }
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
    case 'SET_GAME_STATE':
      return { ...state, gameState: action.payload };
    case 'SET_PILOT_INFO':
      return { ...state, pilotInfo: action.payload };
    case 'SET_USER_INFO':
      return { ...state, userInfo: action.payload, loggedIn: true };
    default:
      return state;
  }
}

export const store = createStore(reducer, defaultStore);
