const initialState = {};

export default function cartReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_ITEM": {
      //   if (state[action.item.id]) {
      //     return {
      //       ...state,
      //       [action.item.id]: {
      //         ...action.item,
      //         quantity: state[action.item.id].quantity + 1,
      //       },
      //     };
      //   } else {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: state[action.item.id]
            ? state[action.item.id].quantity + 1
            : 1,
        },
      };
      //   }
    }
    case "REMOVE_ITEM": {
      const stateCopy = { ...state }; // New object we CAN mutate
      delete stateCopy[action.item.id];
      return stateCopy;
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);

export const getSubtotal = (state) =>
  getStoreItemArray(state).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

export const getCartQuantity = (state) =>
  getStoreItemArray(state).reduce((acc, item) => acc + item.quantity, 0);
