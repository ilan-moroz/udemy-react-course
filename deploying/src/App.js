import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import BlogPage, { loader as postsLoader } from './pages/Blog';
import HomePage from './pages/Home';
// import PostPage, { loader as postLoader } from './pages/Post';
import RootLayout from './pages/Root';
import React from 'react';

const BlogPage = React.lazy(() => import('./pages/Blog'));
const PostPage = React.lazy(() => import('./pages/Post'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          {
            index: true,
            element: (
              <React.Suspense fallback={<p>loading...</p>}>
                <BlogPage />
              </React.Suspense>
            ),
            loader: () =>
              import('./pages/Blog').then(module => module.loader()),
          },
          {
            path: ':id',
            element: (
              <React.Suspense fallback={<p>loading...</p>}>
                <PostPage />
              </React.Suspense>
            ),
            loader: meta =>
              import('./pages/Post').then(module => module.loader(meta)),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
