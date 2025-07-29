import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Header from '../components/Common/Header';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import axiosInstance from '../api/axiosConfig';

function SinglePostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/posts/get_single.php?id=${postId}`);
        setPost(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch post.');
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto p-4 mt-8 bg-white rounded shadow-md text-red-700">
          <p className="text-center">{error}</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto p-4 mt-8 bg-white rounded shadow-md text-gray-700">
          <p className="text-center">Post not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4 mt-8">
        <div className="bg-white p-8 rounded shadow-md max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <p className="text-gray-600 text-sm mb-6">
            By{' '}
            <Link to={`/user/${post.user_id}`} className="text-indigo-600 hover:underline font-medium">
              {post.full_name || post.username}
            </Link>{' '}
            on {formatDate(post.created_at)}
          </p>
          <div className="prose max-w-none text-gray-800 leading-relaxed break-words whitespace-pre-wrap">
            {post.content}
          </div>
          {post.created_at !== post.updated_at && (
            <p className="text-gray-500 text-xs mt-6 text-right">Last updated: {formatDate(post.updated_at)}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;