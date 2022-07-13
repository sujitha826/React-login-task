import { Routes, Route } from "react-router-dom";
import './App.css';
import Register from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Register />} />
        
      </Routes>
    </div>
  );
}

export default App;