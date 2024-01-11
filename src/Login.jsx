import { ArrowRight, CloudDrizzle } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://apurv.onrender.com/api/auth/login", { username, password });
      console.log("POST request successful", res.data);
  
      if (res.data.status && res.data.msg === "Authentication approved, Welcome to the site") {
        // Successful registration, show success alert
        window.alert("Authentication  successful! Redirecting to Home page.");
        // You may redirect to the login page or handle it as per your app's flow
         navigate("/");
      } else if (res.data.status && !res.data.msg) {
        // Successful login with no specific message, show success alert
        window.alert("Login successful! Redirecting to home page.");
        localStorage.setItem("currentUser", JSON.stringify(res.data.user));
        navigate("/");
      } else if (res.data.status && res.data.msg) {
        // Successful login with a message, show the message
        if(res.data.msg === "Registered successfully"){
            window.alert("hello");
        }
        //window.alert(res.data.msg);
      } else {
        // Failed login, show an error alert
        window.alert("Invalid username or password. Please try again.");
      }
    } catch (err) {
      // Handle other errors
      console.error("Error during POST request", err);
      window.alert("An error occurred. Please try again.");
    }
  };
  
  
  

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <a
                href="/register"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </a>
            </p>
            <form onSubmit={handleSubmit} method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Username{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      id="username"
                      name="username"
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your username"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      id="password"
                      name="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Get started <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
            {error && <span className="text-red-500 text-sm">{error}</span>}
            {success && <span className="text-green-500 text-sm">{success}</span>}
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Login;
