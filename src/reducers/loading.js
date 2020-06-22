export const SET_LOADING = "LOADING/SET_LOADING";

export const setLoading = loading => ({
  type: SET_LOADING,
  loading,
});

const initialState = false;

export default function loading(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.loading;
    default:
      return state;
  }
}
