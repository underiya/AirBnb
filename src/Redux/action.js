// action
// action

import axios from "axios";
import {
  GET_CART_SUCCESS,
  GET_LOCATIONS_FAILURE,
  GET_LOCATIONS_REQUEST,
  GET_LOCATIONS_SUCCESS,
  GET_WISHLIST_SUCCESS,
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
