import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';
import Header from '../components/Common/Header';
import BlogPostCard from '../components/Blog/BlogPostCard';
import LoadingSpinner from '../components/Common/LoadingSpinner';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/posts/get_all.php');
        setPosts(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch posts.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-extrabold">Welcome to The Developer's Canvas</h1>
          <p className="text-xl">
            Explore insightful articles, connect with fellow developers, and share your passion for technology.
            Crafted with precision by a PHP Full Stack Developer.
          </p>
          <div className="hero-images">
            <img src="https://placehold.co/300x200/4299E1/FFFFFF?text=Code+Flow" alt="Code Flow" />
            <img src="https://placehold.co/300x200/667EEA/FFFFFF?text=Innovation" alt="Innovation" />
            <img src="https://placehold.co/300x200/4299E1/FFFFFF?text=Growth" alt="Growth" />
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Latest Discoveries</h2>
        {loading && (
          <div className="flex justify-center mt-8">
            <LoadingSpinner />
          </div>
        )}
        {error && <div className="p-3 bg-red-100 text-red-700 rounded text-sm mb-4">{error}</div>}
        
        {!loading && !error && posts.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">No blog posts available yet.</p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;