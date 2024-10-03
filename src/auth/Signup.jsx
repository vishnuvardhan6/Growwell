import React, { useState } from 'react';

function Signup() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic and API call
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full p-6 bg-gray-800 text-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <p>Already have an account? <a href="/login" className="text-blue-400">Log in</a></p>
        <form onSubmit={handleSubmit}>
          <label className="block mt-4">Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full mt-2 p-2 bg-gray-700 rounded"
          />

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

          <label className="block mt-4">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full mt-2 p-2 bg-gray-700 rounded"
          />

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={form.agreedToTerms}
              onChange={handleChange}
              className="mr-2"
            />
            <label>I have agreed to the terms of service</label>
          </div>

          <button type="submit" className="mt-6 w-full bg-blue-500 py-2 rounded">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
