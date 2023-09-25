import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Details from './components/Details';
import Donation from './components/Donation';
import Statistics from './components/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('/cardData.json')

      },
      {
         path:'/donation',
         element:<Donation></Donation>
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader: () => fetch('/cardData.json')
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
