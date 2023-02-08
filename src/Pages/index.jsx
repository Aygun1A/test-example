import React from 'react'
import Home from './Home'
import Register from './Register'
import LogIn from './LogIn'
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";
import { Button, Result } from 'antd';


const Index = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LogIn />} />
        <Route path="*" element={<Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Index
