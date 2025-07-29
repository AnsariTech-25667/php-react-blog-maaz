import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import CreatePostPage from './pages/CreatePostPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import React from 'react';
import RegisterPage from './pages/RegisterPage';
import SinglePostPage from './pages/SinglePostPage';
import UserProfileView from './pages/UserProfileView';
import UserSearchPage from './pages/UserSearchPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/post/:postId" element={<SinglePostPage />} />
        <Route path="/search-users" element={<UserSearchPage />} />
        <Route path="/user/:userId" element={<UserProfileView />} />
      </Routes>
    </Router>
  );
}

export default App;