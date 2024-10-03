import React, { useState } from 'react';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic and API call
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full p-6 bg-gray-800 text-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Log In</h1>
        <p>Don't have an account? <a href="/signup" className="text-blue-400">Sign up</a></p>
        <form onSubmit={handleSubmit}>
          
          <label className="block mt-4">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full mt-2 p-2 bg-gray-700 rounded"
          />

          <label className="block mt-4">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full mt-2 p-2 bg-gray-700 rounded"
          />

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                className="mr-2"
              />
              <label>Remember me</label>
            </div>
            <a href="/forgot-password" className="text-blue-400">Forgot password?</a>
          </div>

          <button type="submit" className="mt-6 w-full bg-blue-500 py-2 rounded">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
