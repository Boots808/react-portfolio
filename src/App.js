import React, { useState } from "react";
import Nav from "./components/Nav";
// import "./App.css";
import About from "./components/About";
// import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
// import Images from "./assets/images";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  const [categories] = useState([
    { name: "About Me", description: "Portraits of people in my life" },
    { name: "Resume", description: "Delicious delicacies" },
    {
      name: "Portfolio",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
    {
      name: "Contact",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div id="app">
      <div id="header">
        <Header></Header>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Nav>
      </div>
      <div id="main">
        {currentCategory === categories[0] && <About></About>}
        {currentCategory === categories[1] && <Portfolio></Portfolio>}
        {currentCategory === categories[2] && <Contact></Contact>}
        {/* {currentCategory === categories[3] && <Resume></Resume>} */}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
