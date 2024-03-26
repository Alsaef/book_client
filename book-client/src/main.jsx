import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Detils from './pages/Detils/Detils.jsx';
import ListedBooks from './pages/ListedBooks/ListedBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/book/:id',
        element:<Detils/>,
        loader:({params})=>fetch(`https://book-server-three.vercel.app/books/${params.id}`)
      },
      {
        path:'/list',
        element:<ListedBooks></ListedBooks>
      }
    ]
  },
]);









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
