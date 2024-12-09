import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/api";

const Signup = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   console.log(form);
      await signup(form);
      navigate("/login");
    } catch (err) {
      setError("User already exist")
    }
  };

  return (
    <section class="bg-gray-50 dark:bg-gray-800">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create a new account
            </h1>
            {error && (
                <div
                  class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <span class="font-medium">User already exist!</span> Change a email
                   and try submitting again.
                </div>
              )}
            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <input
                  name="Email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Email"
                  required
                  type="text"
                  value={form.username}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Password
                </label>
                <input
                  name="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Password"
                  required
                  type="text"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
