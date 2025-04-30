import About from "./section/about"
import NavBar from "./section/header"
import Hero from "./section/hero-section"
import Projects from "./section/work"
import Services from "./section/services"
import Contact from "./section/contact"

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
    </>
  )
}

export default App