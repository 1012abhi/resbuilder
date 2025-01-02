import React from 'react';
import Login from "./component/Login";
import Register from "./component/Register";
import Profile from './component/Profile';
import Admin from './component/Admin';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ProtectedRoutes, PublicRoutes } from "./routes";
import Preview from './component/Preview';
import DynamicTemplate from './component/template/Dynamic';

function App() {
  return (
    <div className="w-full h-screen">
      <BrowserRouter >
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

          <Route path='/profile/preview' element={<Preview/>}/>
          <Route path='/profile/preview/:id' element={<DynamicTemplate />}/>
        
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
