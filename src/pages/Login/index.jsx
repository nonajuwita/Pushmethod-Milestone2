import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [form, setForm] = useState({ 
  email: '', 
  password: '' 
});

const [error, setError] = useState(null);
const [success, setSuccess] = useState(null);
const [loading, SetLoading] = useState(false);

const navigate = useNavigate();

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};

const handleLogin = async(e) => {
  e.preventDefault();
  
  SetLoading (true);
  try {
    const res = await axios.post('https://api.themoviedb.org/3/account?api_key=d64720d80deb19a499c3fbf04a60d89d&session_id=3e5cc4ad3ce7b8598bcb502caff965f80c7cb225', form);
    console.log(res);
    localStorage.setItem('token', res.data.access_token);
    localStorage.setItem('name', res.data.refresh_token);
    setSuccess("Login Berhasil");

    setTimeout(() => {
      navigate('/');
    }, 2000);
  } catch (err) {
    console.log(err);
    setError(err.response.data.message);
  } finally {
    SetLoading (false);
  }
  
};
console.log(form);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* Card Container */}
      <div className="w-full max-w-sm p-6 text-white bg-gray-800 rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-white bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 text-white bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
