import "./App.css";
import Navbar from "./Page/Header/Navbar";
import Intro from "./Page/Main/Introduction/Intro";
import About from "./Page/Main/About/About";
import Offer from "./Page/Main/Offer/Offer";
import Footer from "./Page/Footer/Footer";

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <Intro />
      <About />
      <Offer />
      <Footer />
    </div>
  );
}

export default App;
