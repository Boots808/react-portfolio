import React, { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import About from "./components/About";
// import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
// import Images from "./assets/images";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
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

  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <div id="app">
      <div id="header">
        <Header></Header>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          // contactSelected={contactSelected}
          // setContactSelected={setContactSelected}
        ></Nav>
      </div>
      <div id="main">
        {currentCategory === categories[0] && <About></About>}
        {currentCategory === categories[1] && <Resume></Resume>}
        {/* {currentCategory === categories[2] && <Portfolio></Portfolio>} */}
        {currentCategory === categories[3] && <Contact></Contact>}
      </div>
      <Footer></Footer>
    </div>
  );
}
//        <div id= "main">
//         {!contactSelected ? (
//           <>
//             <Gallery currentCategory={currentCategory}></Gallery>
//             <About></About>
//           </>
//         ) : (
//           <ContactForm></ContactForm>
//         )}
//       </main>
//     </div>
//   );
// } */}

export default App;
