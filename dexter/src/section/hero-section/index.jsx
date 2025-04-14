import "./index.scss"

const Hero = () =>{
    return(
        <section className="hero" id="home">
            <img src={"/assets/hero-background.gif"} alt="background"/>
            <div>
                <img src={"/assets/hero-logo.png"} alt="hero-logo"/>
                <p>Every dream has its code.</p>
            </div>
        </section>
    )
}

export default Hero