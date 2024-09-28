import { useState } from "react";
// import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Experiance from "./Components/Experiance";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import ForMobile from "./Components/ForMobile";
import Skills from "./Components/Skills";
import Home from "./Components/Home";

function App() {

  const [show, setShow] = useState(false);
  const [darkmode, setDarkmode] = useState("light");
  const [bgcolor, setBgcolor] = useState("white");
  const [cross, setCross] = useState(false);

  const handleclick = () => {
    setShow(true)
    setCross(true)
  }

  const handleremove = () => {
    setCross(false)
    setShow(false)
  }


  const handleDarkMode = () => {
    if (darkmode === "light") {
      setDarkmode("dark");
      document.body.style.background = "#131313"

      document.body.style.width = "100%";
      setBgcolor("black");
    } else {
      setDarkmode("light");


      document.body.style.background = "#FEF6DD";
      setBgcolor("white");
    }
  };
  return (
    <>
      <BrowserRouter>
        <div div className="flex flex-col justify-center gap-20">
          <ForMobile
            show={show}
            setShow={setShow}
            darkmode={darkmode}
            setDarkmode={setDarkmode}
            handleDarkMode={handleDarkMode}
            cross={cross}
            setCross={setCross}
            handleclick={handleclick}
            handleremove={handleremove}
          />
          <Routes>
            <Route path="/" element={<Home
              show={show}
              setShow={setShow}
              darkmode={darkmode}
              setDarkmode={setDarkmode}
              bgcolor={bgcolor}
              handleDarkMode={handleDarkMode}
              cross={cross}
              setCross={setCross}
              handleclick={handleclick}
              handleremove={handleremove}

            />}>
              <Route
                index
                element={<About bgcolor={bgcolor} darkmode={darkmode} />}
              />

              <Route
                path="/Experiance"
                element={<Experiance bgcolor={bgcolor} darkmode={darkmode} />}
              />

              <Route
                path="/Contact"
                element={<Contact bgcolor={bgcolor} darkmode={darkmode} />}
              />

              <Route
                path="/Projects"
                element={<Projects bgcolor={bgcolor} darkmode={darkmode} />}
              />

              <Route
                path="/Skills"
                element={<Skills bgcolor={bgcolor} darkmode={darkmode} />}
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
