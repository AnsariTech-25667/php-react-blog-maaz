import React, { useState } from 'react';

import Header from '../components/Common/Header';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import axiosInstance from '../api/axiosConfig';

function UserSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setMessage('');
    setResults([]);
    if (!searchTerm.trim()) {
      setMessage('Please enter a search term.');
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.get(`/users/search.php?q=${encodeURIComponent(searchTerm)}`);
      setResults(response.data);
      if (response.data.length === 0) {
        setMessage('No users found matching your search.');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error searching for users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4 mt-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Find Users</h1>
        <form onSubmit={handleSearch} className="mb-8 flex flex-col md:flex-row items-center gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search by username or full name..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 text-sm"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {message && <div className="p-3 bg-yellow-100 text-yellow-700 rounded text-sm mb-4 max-w-xl mx-auto">{message}</div>}

        {loading && (
          <div className="flex justify-center mt-8">
            <LoadingSpinner />
          </div>
        )}

        {results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {results.map(user => (
              <div key={user.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  <Link to={`/user/${user.id}`} className="hover:text-indigo-600">{user.username}</Link>
                </h3>
                {user.full_name && <p className="text-gray-600 text-sm mb-1">{user.full_name}</p>}
                {user.bio && <p className="text-gray-700 text-base line-clamp-2">{user.bio}</p>}
                <div className="mt-4 text-right">
                  <Link to={`/user/${user.id}`} className="text-indigo-600 hover:underline text-sm font-medium">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserSearchPage;