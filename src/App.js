import Banner from "./pages/components/Banner";

import { About } from "./pages/home/About";
import { Project } from "./pages/home/Project";
import Services from "./pages/home/skills/Services";
import Footer from './pages/home/Footer'
import { Navbar } from "./pages/components/Navbar";


function App() {
  return (
    <div className="App bg-stone-950">
        <Navbar/>
         <Banner/>
         <Services/>
         <About/>
         <Project/>
         <Footer/>
         
    </div>
  );
}

export default App;
