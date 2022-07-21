import { Routes, Route, Navigate, useNavigate, Outlet } from "react-router-dom";
import './App.css';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import Home from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';

function isLoggedIn() {
  let user = localStorage.getItem("currentUser")
  console.log("is logged in -" + user);
  return user ? true : false;
}

const ProtectedRoute = ({ redirectPath, children }) => {
  let user = isLoggedIn();
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/*<Route path="/home" element={isLoggedIn() ? <Home /> : <Navigate replace to="/" />} />*/}

        <Route path="/home" element={
          <ProtectedRoute redirectPath="/">
            <Home />
          </ProtectedRoute>} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}


export default App;