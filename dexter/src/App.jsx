import About from "./section/about"
import NavBar from "./section/header"
import Hero from "./section/hero-section"
import Projects from "./section/work"
import Services from "./section/services"
import Contact from "./section/contact"
import Footer from "./section/footer"

const App = () =>{
  return(
    <>
      <NavBar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Services/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App