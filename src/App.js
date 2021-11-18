import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home"
import Login from "./components/login";
import Register from "./components/register";
export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/sign-in" element={<Login/>} exact/>
                <Route path="/sign-up" element={<Register/>} exact/>
            </Routes>
        </BrowserRouter>
    )
}