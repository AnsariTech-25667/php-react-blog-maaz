import React, { useState } from 'react';

import axiosInstance from '../../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

function CreateBlogPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    const token = localStorage.getItem('userToken');
    if (!token) {
      setMessage('You must be logged in to create a post.');
      setLoading(false);
      navigate('/login');
      return;
    }

    try {
      const response = await axiosInstance.post('/posts/create.php', {
        title,
        content,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage(response.data.message);
      setTitle('');
      setContent('');
      setTimeout(() => {
        navigate('/'); 
      }, 1500);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to create post. Please try again.';
      setMessage(errorMessage);
      if (error.response?.status === 401) {
        setTimeout(() => navigate('/login'), 1500);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {message && (
        <div className={`p-3 rounded text-sm ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          id="content"
          rows="10"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? 'Creating Post...' : 'Create Post'}
        </button>
      </div>
    </form>
  );
}

export default CreateBlogPostForm;