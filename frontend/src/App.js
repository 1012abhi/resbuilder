import React from 'react';
import Login from "./component/Login";
import Register from "./component/Register";
import Profile from './component/Profile';
// import Preview from './component/Preview';
import Admin from './component/Admin';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ProtectedRoutes, PublicRoutes } from "./routes";

function App() {

  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          } />
          <Route path="/profile" element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          } />

          <Route path="/admin*" element={
            <ProtectedRoutes>
              <Admin />
            </ProtectedRoutes>
          } />

          {/* <Route path='/Preview' element={<Preview />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;