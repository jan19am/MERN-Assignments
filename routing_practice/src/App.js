import './App.css';
import React from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";

const Home = (props) => {
  return (
    <h1>Welcome</h1>
  )
}

const Number = (props) => {
  return (
    <h1>The number is: 4</h1>
  )
}

const Hello = (props) => {
  return (
    <h1>The word is: hello</h1>
  )
}

const Colors = (props) => {
  return (
    <h1 style={{color: "blue", background: "red"}}>The word is: hello</h1>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/4" element={<Number />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/hello/blue/red" element={<Colors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
