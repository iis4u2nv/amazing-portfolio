import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import About from './components/About'
import Project from './components/Project'
import reportWebVitals from './reportWebVitals';

// add any other components here that you want to be able to see (with the path)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Some error happened</h1>,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: 'portfolio',
        element: <Project />
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
reportWebVitals(console.log);
