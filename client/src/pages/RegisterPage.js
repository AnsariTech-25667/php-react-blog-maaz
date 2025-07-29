import React from 'react';
import RegisterForm from '../components/Auth/RegisterForm';

function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;