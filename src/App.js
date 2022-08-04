import { BrowserRouter, Link } from "react-router-dom";

import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    //基本的なRoute処理
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
