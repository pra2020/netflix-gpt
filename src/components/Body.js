import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {

  // createBrowserRouter: consists array of paths
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    },
    
  ]);

  return (
    <div>
      {/* navigate function works only in RouterProvider func */}
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body