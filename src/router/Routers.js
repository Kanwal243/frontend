import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import TourDetails from "../pages/TourDetails";
import Tours from "../pages/Tours";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import Thankyou from "../pages/Thankyou";
const Routers = () => {
  return(
  <Routes>
    <Route path="/" element={<Navigate to="/home" />}/>
      <Route path="/home" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/tours" element={<Tours />} />
      <Route path="/tour/:id" element={<TourDetails />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/thank-you" element={<Thankyou />} />
      <Route path="/tour/search" element={<SearchResultList />} />
  </Routes>
  );
};

export default Routers;
