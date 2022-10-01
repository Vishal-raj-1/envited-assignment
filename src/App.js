import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./components/createEvent";
import EventDetail from "./components/eventDetail";
import LandingPage from "./components/landingPage";
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/create" exact element={<CreateEvent />} />
          <Route path="/event" exact element={<EventDetail />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;