import { useState } from "react";
import BasicForm from "./components/BasicForm";
import "./App.css";
import React from 'react';



function App() {
  const [view, setView] = useState("basic");
  
  return (
    <div className="App"><BasicForm/></div>
    
  );
}

export default App;


