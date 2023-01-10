import React, { useState, useEffect } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import "./App.css";
import MainNav from "./pages/MainNav";
import User from "./pages/User";
import { BrowserRouter } from "react-router-dom";

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <MainNav />

          <hr />
          <User />
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
