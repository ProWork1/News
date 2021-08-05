import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/zoom/zoom.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import 'bootstrap/js/src/carousel'
=======
import "./FA/css/all.min.css"
>>>>>>> 494790e6e9d9a68659e78c83a7edb5f0f9040a5d
ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
