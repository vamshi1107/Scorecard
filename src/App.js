import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import userContext from "./context/userContext";
import Matches from "./components/matches/matches";
import Match from "./components/match/match";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Matches></Matches>}></Route>
        <Route path="/matches" element={<Matches></Matches>}></Route>
        <Route path="/match/:id" element={<Match></Match>}></Route>
      </Routes>
    </>
  );
}

export default App;
