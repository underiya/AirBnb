import {
  GET_CART_SUCCESS,
  GET_WISHLIST_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from './actionType';

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

const initialUserState = {
  isLoggedIn: false,
  user: [],
  error: null,
};

export const authReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: [],
        error: action.payload,
      };
    case LOGOUT:
      return initialUserState;
    default:
      return state;
  }
};
