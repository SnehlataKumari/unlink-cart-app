import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from "react-router-dom";
import router from './config/router';
import AppProvider from './hooks/AppProvider';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
