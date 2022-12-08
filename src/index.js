import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/details" element={<Details/>}/>
    </Routes>
  </Router>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


function Contact()
{
  return(
    <div>
    <h1 className="contact-part">For Further information please, Contact Here <br/> Contact no:-7046862993</h1>
    </div>
  )
}


function Home()
{
  return(
    <div>
    <h1 className="home-part">Welcome to the Home page!!</h1>
    </div>
  )
}


function About()
{
  return(
    <div>
    <h1 className="about-part">Welcome to the About page!!</h1>
    </div>
  )
}


function Details()
{
  return(
    <div>
    <h1 className="home-part">For Further details,Visit these site!!</h1>
    </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
