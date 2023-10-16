import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {

    const [isLoggedIn, setLoggedIn]= useState(false);



  return (
  <div className="w-screen h-screen bg-richblack-900 flex flex-col">
       <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></Navbar>



       <Routes>
          <Route path="/" element={<Home></Home>}/>
           <Route path="/login" element={<Login setIsLoggedIn={setLoggedIn}></Login>}/>
            <Route path="/signup" element={<Signup setIsLoggedIn={setLoggedIn}></Signup>}/>
             <Route path="/dashboard" element={<Dashboard></Dashboard>}/>

       </Routes>

  </div>

  );
}

export default App;
