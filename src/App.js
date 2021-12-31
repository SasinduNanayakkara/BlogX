import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Post from './pages/Post';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] =useState(null);

  useEffect(() =>{
    const getUser = () =>{ //get the user details from the google account
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: { //default
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credintials": true,
        },
      }).then((response)=>{
        if(response.status===200){
          return response.json(); //return the response as json
        }
        throw new Error("authentication has been failed!"); //return the error
      }).then(resObject=>{
        setUser(resObject.user) //pass the user details
      }).catch(err=>{
        console.log(err);
      })
    }
    getUser(); //call the function
  },[]);

  console.log(user);
  return (
    //define the routes
    <div className="App">
      <BrowserRouter>
      <div>
      </div>
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>}/>
        <Route path="/post/:id" element={user ? <Post/> : <Navigate to="/login" />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
