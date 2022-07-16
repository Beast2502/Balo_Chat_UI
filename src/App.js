import React from "react";

//Components
import Header from "./components/Header/Header";
import MainContainer from "./pages/Home/MainContainer";
import Search from "./pages/Search/Search";
import Filter from "./pages/Filter/Filter";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainContainer />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/filter" element={<Filter />} />
      </Routes>
      <Header />
    </>
  );
};

export default App;

