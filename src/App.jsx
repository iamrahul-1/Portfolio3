import Home from "./pages/home.jsx";
import Projects from "./pages/Projects.jsx";

import Navbar from "./Components/Navbar.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
