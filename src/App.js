import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Contact from "./components/contactMe/contact";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
