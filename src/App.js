import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Pages/Home";
import Review from "./Pages/Review";
import Dashboard from "./Pages/Dashboard";
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";
import Page404 from "./Pages/Page404";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/review" element={<Review></Review>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
