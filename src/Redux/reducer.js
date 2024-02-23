import {
  GET_CART_SUCCESS,
  GET_LOCATIONS_FAILURE,
  GET_LOCATIONS_REQUEST,
  GET_LOCATIONS_SUCCESS,
  GET_WISHLIST_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS_REQUEST:
      return { ...state, isLoading: true };
    case GET_LOCATIONS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_LOCATIONS_SUCCESS:
      return { ...state, isLoading: false, products: action.payload };
    default:
      return state;
  }
};
export const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case GET_WISHLIST_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CART_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
};
