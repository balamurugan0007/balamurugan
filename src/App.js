import Banner from "./pages/components/Banner";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/home/Footer";
import Portfolio from "./pages/home/portflio/Portfolio";
import Services from "./pages/home/skills/Services";


function App() {
  return (
    <div className="App">
         <Navbar/>
         <Banner/>
         <Services/>
         <Portfolio />
         <Footer/>
    </div>
  );
}

export default App;
