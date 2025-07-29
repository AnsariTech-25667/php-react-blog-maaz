import CreateBlogPostForm from '../components/Blog/CreateBlogPostForm';
import Header from '../components/Common/Header';
import React from 'react';

function CreatePostPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4 mt-8">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Create New Blog Post</h2>
          <CreateBlogPostForm />
        </div>
      </div>
    </div>
  );
}

export default CreatePostPage;