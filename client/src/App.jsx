import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {isLoggedIn ? (
        <>
          <h1>Welcome User!!</h1>
        </>
      ) : (
        <Home />
      )}
    </Router>
  );
}

export default App;
