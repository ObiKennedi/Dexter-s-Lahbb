import About from "./section/about"
import NavBar from "./section/header"
import Hero from "./section/hero-section"
import Projects from "./section/work"

const App = () =>{
  return(
    <>
      <NavBar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
      </main>
    </>
  )
}

export default App