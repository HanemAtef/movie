import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Series from './components/Series/Series'
import TvDetails from './components/TvDetails/TvDetails'
import About from './components/About/About';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import WatchList from './components/WatchList/index';
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home'

// import MovieContent from './components/Movies/MovieContent';
import MovieContent from './components/Movies/MovieContent'
import Login from './components/Login/Login';
// import Register from './components/Register/Register';
import MovieDetails from './components/Moviedetails/MovieDetails';

import SignUp from './components/SignUp/SignUp';



export default function App() {

  let routes = createBrowserRouter([{
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      {
        path: 'movies', element: <MovieContent />
      },
      { path: '/movies/:movie_id', element: <MovieDetails /> }
      ,
      { path: 'watchlist', element: <WatchList /> },
      { path: 'login', element: <Login /> },
      {
        path: 'Series',
        element: <Series />
      },
      { path: '/series/:series_id', element: <TvDetails /> }
      ,
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'about', element: <About /> }
    ]
  }])

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </div>
  );

}

