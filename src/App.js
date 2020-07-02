import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./components/routers";

function App() {
  return (
    <div>
      <Router>
          <BaseRouter />
      </Router>
    </div>
  );
}

export default App;
