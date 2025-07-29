import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import BlogPostCard from '../components/Blog/BlogPostCard';
import Header from '../components/Common/Header';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import axiosInstance from '../api/axiosConfig';

function UserProfileView() {
  const { userId } = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/users/get_profile.php?id=${userId}`);
        setUserProfile(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch user profile.');
        setUserProfile(null);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserProfile();
    }
  }, [userId]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
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

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto p-4 mt-8 bg-white rounded shadow-md text-gray-700">
          <p className="text-center">User not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4 mt-8">
        <div className="bg-white p-8 rounded shadow-md max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {userProfile.full_name || userProfile.username}'s Profile
          </h1>
          <p className="text-gray-600 mb-2">@{userProfile.username}</p>
          {userProfile.email && <p className="text-gray-600 mb-2">Email: {userProfile.email}</p>}
          {userProfile.bio && <p className="text-gray-700 mb-4">{userProfile.bio}</p>}
          <p className="text-gray-500 text-sm">Joined: {formatDate(userProfile.created_at)}</p>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {userProfile.full_name || userProfile.username}'s Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userProfile.posts && userProfile.posts.length > 0 ? (
            userProfile.posts.map(post => (
              <BlogPostCard key={post.id} post={{ ...post, username: userProfile.username, full_name: userProfile.full_name }} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No posts by this user yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfileView;