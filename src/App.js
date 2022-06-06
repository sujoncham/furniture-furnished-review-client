import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from './components/AuthenticateSystem/Login';
import Register from './components/AuthenticateSystem/Register';
import FurnitureDetails from './components/Product/Furniture/FurnitureDetails';
import SingleDetails from './components/Product/SingleDetails';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Dashboard from "./Pages/Dashboard";
import Furniture from './Pages/Furniture';
import Home from "./Pages/Home";
import Page404 from "./Pages/Page404";
import Review from "./Pages/Review";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/review" element={<Review></Review>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/singleDetails" element={<SingleDetails></SingleDetails>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/furniture" element={<Furniture></Furniture>}></Route>
          <Route path="/furniture/:furnId" element={<FurnitureDetails></FurnitureDetails>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
