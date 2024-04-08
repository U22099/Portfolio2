import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from './Components/About';
import Works from './Components/Works';
import Exp from "./Components/Exp";
import Contact from "./Components/Contact";

function PortfolioApp(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Works/>
            <Exp/>
            <Contact/>
        </>
        );
}
export default PortfolioApp