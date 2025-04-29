import About from "./section/about"
import NavBar from "./section/header"
import Hero from "./section/hero-section"
import Projects from "./section/work"
import Services from "./section/services"

const App = () =>{
  return(
    <>
      <NavBar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Services/>
      </main>
    </>
  )
}

export default App