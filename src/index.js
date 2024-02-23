import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import SieveOfEratosthenes from './components/SieveOfEratosthenes';
import SortingAlgorithms from './components/sortingAlgorithms/SortingAlgorithms';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div className='text-2xl font-bold text-zinc-300'>404 not found</div>
  },
  {
    path: '/sieve-of-eratosthenes',
    element: <SieveOfEratosthenes />
  },
  {
    path: '/sorting-algorithms',
    element: <SortingAlgorithms />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="flex items-center justify-center w-screen h-screen bg-zinc-800">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

