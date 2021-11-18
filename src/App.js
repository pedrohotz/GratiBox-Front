import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home"
import Login from "./components/login";
export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/sign-in" element={<Login/>} exact/>
            </Routes>
        </BrowserRouter>
    )
}