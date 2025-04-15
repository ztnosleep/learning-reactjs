 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Header from "./components/Header";
 import Content from "./components/Content";
 import Menu from "./components/Menu";
import './index.css'
function App() {
  

  return (
    <>
      <div className="flex">
      <Menu />
      <div className="flex flex-col flex-1">
        <Header />
        <Content />
      </div>
    </div>

    </>
  )
}

export default App
