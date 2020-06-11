export const SET_USER = "USER/SET_USER";

export const setUser = user => ({
  type: SET_USER,
  user,
});

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
