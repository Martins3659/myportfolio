import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import MySkill from "./MySkill";
import About from "./About";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router future={{ v7_startTransition: true }}>
        <Link to={"/"}></Link>
        <Link to={"/portfolio"}></Link>
        <Link to={"/src/About.jsx"}></Link>
        <Link to={"/testimonial"}></Link>
        <Link to={"/contact"}></Link>

        <Routes>
          <Route path="/src/About.jsx" element={<About />} />
        </Routes>
      </Router>
      <Navbar />
      <Header />
      <MySkill />

      <Blog />
      <Testimonial />
      <Contact />
      <Footer />
      {/* <Router future={{ v7_startTransition: true }}>
        <Routes>
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
