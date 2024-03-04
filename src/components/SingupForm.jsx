import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (response.ok) {
        setMessage(`User ${data.data.username} registered successfully`);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred, please try again.');
    }
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Signup</button>
      </form>
      {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
    </div>
  );
};

export default SignupForm;
