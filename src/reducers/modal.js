export const OPEN_MODAL = "MODAL/OPEN_MODAL";
export const CLOSE_MODAL = "MODAL/CLOSE_MODAL";

export const openModal = component => ({
  type: OPEN_MODAL,
  component,
});
export const closeModal = () => ({
  type: CLOSE_MODAL,
});

const initialState = {
  isOpen: false,
  component: null,
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        component: action.component,
      };
    case CLOSE_MODAL:
      return {
        isOpen: false,
        component: null,
      };
    default:
      return state;
  }
}
