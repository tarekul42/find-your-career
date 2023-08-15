import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import JobDetails from './Components/JobDetails/JobDetails';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import AppliedJobsLoader from './Components/loaders/AppliedJobsLoader'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <Header></Header>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: AppliedJobsLoader
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'jobDetails',
        element: <JobDetails></JobDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
