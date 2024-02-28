import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { getUser, login } from "../../Redux/Auth/Action";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt))
    }
  }, [jwt, auth.jwt]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    }

    dispatch(login(userData));
    console.log("user data", userData);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-12 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl mb-6 text-center font-semibold text-blue-500">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
        </form>
        <div className="flex justify-center flex-col items-center">
          <div className="py-3 flex items-center ">
            <p className="m-0 p-0">If you don't have an account ?</p>
            <Button onClick={() => navigate("/Signup")} className="ml-5" size="small">
              SignIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
