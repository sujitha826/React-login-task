import { Routes, Route } from "react-router-dom";
import './App.css';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import Home from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;