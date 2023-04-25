import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Trail4 from './Trail4';
import Trail4 from './Trail4';
import Trail3 from './Trail';
import Trail5 from './Trail5';
import Navbar from './navbar';
import Drop from './drop';
import Profile from './profile';
import DropdownMenu from './ritik';
// import LeavePage from './Leavepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    <Trail3/>
    {/* <Trail5/> */}
    {/* <Navbar/> */}
    {/* <Drop/> */}
    {/* <Profile/> */}
    {/* <Drop/> */}
    {/* <LeavePage/> */}
    {/* <DropdownMenu/> */}
    {/* <ritik/> */}

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
