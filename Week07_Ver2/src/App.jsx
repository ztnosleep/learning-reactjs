 import './App.css'
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Header from "./components/Header";
 import Content from "./components/Content";
 import Menu from "./components/Menu";
import './index.css'
function App() {
  

  return (
    <>
       <div className="app">
      <Menu />
      <div className="main-content">
        <Header />
        <Content />
      </div>
    </div>
    </>
  )
}

export default App
