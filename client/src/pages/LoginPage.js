import LoginForm from '../components/Auth/LoginForm'; // We'll create this next
import React from 'react';

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;