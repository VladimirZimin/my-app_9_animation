import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Comments from "components/Comments/Comments";
import { Route, Routes } from "react-router-dom";
import AppBar from "components/AppBar/AppBar";
import Swiper from "components/Swiper/Swiper";
import Home from "components/Home/Home";

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="comments" element={<Comments />} />
          <Route path="swiper" element={<Swiper />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
