import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
 </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
