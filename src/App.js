import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import './App.css';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import Home from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';

function isLoggedIn() {
  let user = localStorage.getItem("currentUser")
  console.log("is logged in -" + user);
  return user ? true: false;
}


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={isLoggedIn() ? <Home /> : <Navigate replace to="/" />} />
        <Route path="*" element={<PageNotFound />} />  
      </Routes>
    </div>
  );
}


export default App;