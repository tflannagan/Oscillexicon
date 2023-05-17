import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import SecondPage from "./components/SecondPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === "home" ? (
        <HomePage onNavigate={handleNavigation} />
      ) : (
        <SecondPage onNavigate={handleNavigation} />
      )}
    </div>
  );
}

export default App;
