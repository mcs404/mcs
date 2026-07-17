import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Services />
      <About />
      <Contact />
      <Gallery />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
