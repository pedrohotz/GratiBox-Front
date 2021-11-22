import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home"
import Login from "./components/login";
import Register from "./components/register";
import Subscription from "./components/subscription";
import Sign from "./components/sign";
import UserContext from "./context/usercontext";
import { useState } from 'react';
export default function App(){
    const userLogged = JSON.parse(localStorage.getItem('@user'));
    const [user,setUser] = useState(userLogged);

    return(
        <BrowserRouter>
        <UserContext.Provider value={{user,setUser}}>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/sign-in" element={<Login/>} exact/>
                <Route path="/sign-up" element={<Register/>} exact/>
                <Route path="/subscription" element={<Subscription/>} exact/>
                <Route path="/sign" element={<Sign/>} exact/>
            </Routes>
        </UserContext.Provider>
        </BrowserRouter>
    )
}