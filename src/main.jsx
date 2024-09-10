import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthLayout, Login, AllPosts, CreatePost, EditPost, Post } from './components/index.js'
import Home from './pages/Home.jsx'
import SignUp from './pages/Signup.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '',
    element: <Home />,
  },
  {
    path: '/login',
    element: (
      <AuthLayout authentication={false}>
          <Login />
      </AuthLayout>
    )
  },
  {
    path: '/signup',
    element: (
      <AuthLayout authentication={false}>
          <SignUp />
      </AuthLayout>
    )
  },
  {
    path: '/all-posts',
    element: (
      <AuthLayout authentication={true}>
          {" "}
          <AllPosts />
      </AuthLayout>
    )
  },
  {
    path: '/new-post',
    element: (
      <AuthLayout authentication={true}>
          {" "}
          <CreatePost />
      </AuthLayout>
    )
  },
  {
    path: '/edit-post/:slug',
    element: (
      <AuthLayout authentication={true}>
          {" "}
          <EditPost />
      </AuthLayout>
    )
  },
  {
    path: '/post/:slug',
    element: <Post />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
