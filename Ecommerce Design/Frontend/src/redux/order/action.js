import axios from "axios";

export const FETCH_ORDER_REQUEST = "FETCH_ORDER_REQUEST";
export const FETCH_ORDER_SUCCESS = "FETCH_ORDER_SUCCESS";
export const FETCH_ORDER_FAILURE = "FETCH_ORDER_FAILURE";

export const FETCH_SINGLE_ORDER_REQUEST = "FETCH_SINGLE_ORDER_REQUEST";
export const FETCH_SINGLE_ORDER_SUCCESS = "FETCH_SINGLE_ORDER_SUCCESS";
export const FETCH_SINGLE_ORDER_FAILURE = "FETCH_SINGLE_ORDER_FAILURE";

export const ADD_ORDER_REQUEST = "ADD_ORDER_REQUEST";
export const ADD_ORDER_SUCCESS = "ADD_ORDER_SUCCESS";
export const ADD_ORDER_FAILURE = "ADD_ORDER_FAILURE";

const fetchSingleOrderRequest = () => {
  return {
    type: FETCH_SINGLE_ORDER_REQUEST,
  };
};

const fetchSingleOrderFailure = (error) => {
  return {
    type: FETCH_SINGLE_ORDER_FAILURE,
    payload: error,
  };
};

const fetchSingleOrderSuscess = (data) => {
  return {
    type: FETCH_SINGLE_ORDER_SUCCESS,
    payload: data,
  };
};

export const fetchSingleOrderData = (orderId) => (dispatch) => {
  dispatch(fetchSingleOrderRequest());
  axios(`http://localhost:5000/order/${orderId}`)
    .then((response) => {
      dispatch(fetchSingleOrderSuscess(response.data));
    })
    .catch((error) => {
      dispatch(fetchSingleOrderFailure(error.message));
    });
};

const fetchOrderRequest = () => {
  return {
    type: FETCH_ORDER_REQUEST,
  };
};

const fetchOrderFailure = (error) => {
  return {
    type: FETCH_ORDER_FAILURE,
    payload: error,
  };
};

const fetchOrderSuscess = (data) => {
  return {
    type: FETCH_ORDER_SUCCESS,
    payload: data,
  };
};

export const fetchUserAllOrders = (userId) => (dispatch) => {
  dispatch(fetchOrderRequest());
  axios(`http://localhost:5000/order/${userId}`)
    .then((response) => {
      dispatch(fetchOrderSuscess(response.data));
    })
    .catch((error) => {
      dispatch(fetchOrderFailure(error.message));
    });
};

const addOrderRequest = () => {
  return {
    type: ADD_ORDER_REQUEST,
  };
};

const addOrderFailure = (error) => {
  return {
    type: ADD_ORDER_FAILURE,
    payload: error,
  };
};

const addOrderSuscess = (data) => {
  return {
    type: ADD_ORDER_SUCCESS,
    payload: data,
  };
};

export const addToOrder = (payload) => (dispatch) => {
  dispatch(addOrderRequest());
  axios.post(`http://localhost:5000/order`,payload)
    .then((response) => {
      dispatch(addOrderSuscess(response.data));
    })
    .catch((error) => {
      dispatch(addOrderFailure(error.message));
    });
};
