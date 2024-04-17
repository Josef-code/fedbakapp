import { useState } from "react";
import './../App.css';
import { Helmet } from "react-helmet";

function Login() {





  return (
    <>
    <Helmet>
        <title>Login - Fedbak</title>
    </Helmet>
      <div class="flex items-center justify-center h-screen">
        <div class="bg-white p-8 rounded shadow-md w-80">
          <h2 class="text-2xl font-semibold mb-4">Login</h2>
          <form>
            <div class="mb-4">
              <label
                for="username"
                class="block text-gray-700 font-medium mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="mb-4">
              <label
                for="password"
                class="block text-gray-700 font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              class="w-full mb-5 bg-[#003049] text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
            
          </form>
          <a href="/register" class="w-full text-blue-800 font-medium">Don't have an account? Register</a>
        </div>
      </div>
    </>
  );
}

export default Login;
