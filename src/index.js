import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import './index.css';
import Layout from './Components/Layout';
// import Login from './pages/login';
import ErrorPage from "./pages/ErrorPage";
// import PageDetail from "./pages/PostDetail";
import Home from "./pages/Home";
import PostDetail from './pages/PostDetail';
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import CategoryPosts from "./pages/CategoryPosts";
import AuthorsPosts from "./pages/AuthorPosts";
import Authors from "./pages/Authors";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import UserProvider from './context/userContext';

const router = createBrowserRouter([
  {
    path:"/",
    element:<UserProvider><Layout/></UserProvider>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true, element: <Home/>},
      {path: "posts/:id", element:<PostDetail />},
      {path: "register", element:<Register />},
      {path: "login", element:<Login />},
      {path: "profile/:id", element:<UserProfile />},
      {path: "authors", element:<Authors />},
      {path: "create", element:<CreatePost />},
      {path: "posts/categories/:category", element: <CategoryPosts/>},
      {path: "posts/users/:id", element: <AuthorsPosts />},
      {path: "myposts/:id", element:<Dashboard />},
      {path: "posts/:id/edit", element:<EditPost />},
      {path: "logout", element:<Logout />},

    ]
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

