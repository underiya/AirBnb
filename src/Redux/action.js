// action

import axios from "axios";
import {
  GET_CART_SUCCESS,
  GET_LOCATIONS_FAILURE,
  GET_LOCATIONS_REQUEST,
  GET_LOCATIONS_SUCCESS,
  GET_WISHLIST_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionType";

export const getLocation = () => async (dispatch) => {
  dispatch({ type: GET_LOCATIONS_REQUEST });
  try {
    let res = await axios.get(
      `https://backend-airbnb-stqx.onrender.com/api/locations`
    );

    const data = res.data;
    dispatch({ type: GET_LOCATIONS_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({ type: GET_LOCATIONS_FAILURE });
    console.log(error);
  }
};

export const addToCart = (data) => (dispatch) => {
  dispatch({ type: GET_CART_SUCCESS, payload: data });
};

export const addToWishlist = (data) => (dispatch) => {
  dispatch({ type: GET_WISHLIST_SUCCESS, payload: data });
};

// user Authentication
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

// Authentication
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      // Make GET request to authenticate user
      const response = await axios.get(
        `https://backend-airbnb-stqx.onrender.com/api/users`
      );

      const users = response.data;

      const AuthenticatedUser = users.filter(
        (user) => user.email === email && user.password === password
      );

      if (AuthenticatedUser.length > 0) {
        dispatch(loginSuccess(AuthenticatedUser));
      } else {
        dispatch(loginFailure("Invalid Username or Password"));
        console.log("Invalid Username or Password");
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};
