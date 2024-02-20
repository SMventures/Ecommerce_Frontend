import axios from 'axios';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT
} from '../Auth/ActionType';
import { API_BASE_URL } from '../../config/api';

const token =localStorage.getItem("jwt");
// Register action creators
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload:user });
const registerFailure = error => ({ type: REGISTER_FAILURE, payload: error });

export const register = userData => async dispatch => {
  dispatch(registerRequest());
  try {
    const response=await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if(user.jwt){
         localStorage.setItem("jwt",user.jwt)
    }
    console.log("register:",user)
    dispatch(registerSuccess(user.jwt));
    
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

// Login action creators
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = error => ({ type: LOGIN_FAILURE, payload: error });

export const login = userData => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signIn`, userData);
    const user = response.data;
    if(user.jwt){
         localStorage.setItem("jwt",user.jwt)
    }
    console.log("login:",user)
    dispatch(loginSuccess(user.jwt));
  } 
  catch (error) {
    dispatch(loginFailure(error.message));
  }
};

// getuser action creators
const getUserRequest = () => ({ type:GET_USER_REQUEST });
const getUserSuccess = user => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = error => ({ type: GET_USER_FAILURE, payload: error });

//  get user from token
export const getUser = (jwt) => async (dispatch) => {
    dispatch({type:GET_USER_REQUEST });
    try {
        const response = await axios.post(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                "Authorization":`Bearer ${jwt}`
            }
        });
        const user = response.data;
        console.log("user",user)
        dispatch(getUserSuccess(user));

        }catch (error) {
            dispatch(getUserFailure(error.Message));
          }
    };

  

export const logout = (token) => {
    return async (dispatch) => {
      dispatch({ type: LOGOUT , payload:null});
      localStorage.clear();
    };
  };