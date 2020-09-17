export function checkToken() {
  return { type: 'CHECK_TOKEN' };
}
export function logInUser(userInfo, token) {
  return { type: 'LOG_IN', payload: { token, userInfo } };
}
export function logOutUser() {
  return { type: 'LOG_OUT', payload: false };
}
export function setGameState(state) {
  return { type: 'SET_GAME_STATE', payload: state };
}
export function setUserInfo(userInfo) {
  return { type: 'SET_USER_INFO', payload: userInfo };
}
