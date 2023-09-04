import React, { useState } from "react";
import RegisterUser from "./Register";
import Login from "./Login";
import "./App.css";

function App() {
  const [isActive, setActive] = useState(true);
  const activeTab = () => {
    setActive(false);
  };

  return (
    <div className="App">
      {isActive ? <Login onclick={activeTab} /> : <RegisterUser />}
    </div>
  );
}

export default App;
