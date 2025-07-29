import { Link } from 'react-router-dom';
import React from 'react';

function BlogPostCard({ post }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
        <Link to={`/post/${post.id}`} className="hover:text-indigo-600">
          {post.title}
        </Link>
      </h3>
      <p className="text-gray-600 text-sm mb-3">
        By{' '}
        <Link to={`/user/${post.user_id}`} className="text-indigo-600 hover:underline font-medium">
          {post.full_name || post.username}
        </Link>{' '}
        on {formatDate(post.created_at)}
      </p>
      <p className="text-gray-700 text-base mb-4 line-clamp-3">
        {post.content}
      </p>
      <div className="text-right">
        <Link to={`/post/${post.id}`} className="text-indigo-600 hover:underline text-sm font-medium">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogPostCard;