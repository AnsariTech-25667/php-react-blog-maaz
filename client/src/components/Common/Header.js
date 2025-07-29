import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const storedUsername = localStorage.getItem('username');
    const storedUserId = localStorage.getItem('userId');
    if (token && storedUsername && storedUserId) {
      setIsAuthenticated(true);
      setUsername(storedUsername);
      setUserId(storedUserId);
    } else {
      setIsAuthenticated(false);
      setUsername('');
      setUserId('');
    }
  }, [window.location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="container flex justify-between items-center">
        <Link to="/" className="logo">
          DevCanvas <span className="text-base">by Maaz Ansari, PHP Full Stack Developer from VIT Pune</span>
        </Link>
        <nav>
          <ul className="flex space-x-8 items-center">
            <li>
              <Link to="/" className="text-gray-700">
                Home
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/create-post" className="text-gray-700">
                    Create Post
                  </Link>
                </li>
                <li>
                  <Link to="/search-users" className="text-gray-700">
                    Find Users
                  </Link>
                </li>
                <li>
                  <Link to={`/user/${userId}`} className="text-blue-600">
                    {username}'s Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-500 text-white rounded-md text-sm"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="text-gray-700">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
