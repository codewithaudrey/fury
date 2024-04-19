import React from 'react';
import './assets/styles/global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/root/Layout';
import HomePage from './pages/home/Page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
