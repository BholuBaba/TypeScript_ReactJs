//import React from 'react';
//import logo from './logo.svg';
import Todo from "./Component/Todos";
import "./App.css";

function App() {
  return (
    <div>
      <Todo items={["learn React", "Learn TypeScript"]} />
    </div>
  );
}

export default App;
