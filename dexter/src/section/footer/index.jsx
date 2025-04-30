import "./index.scss"
import { handles } from "../../constants"
import QuickLinks from "../../components/quickLinks"
import Subscribe from "../../components/subscribe"
import ServiceSlide from "../../components/service-slide"

const Footer = () =>{
    return(
        <footer>
            <section>
                <div>
                    <img src="/assets/hero-logo.png" alt="logo"/>
                    <div>
                        At the Lahb we'll give Solutions you can trust and results you can see.
                        Driven by creativity, defined by reliability, proven by results.
                    </div>
                    <ul>
                        {handles.map((item)=>(
                            <li key={item.id}>
                                <a href={item.href}>
                                    <img src={item.icons} alt={item.id}/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <QuickLinks/>
                <Subscribe/>
            </section>
            <section>
                <ServiceSlide/>
            </section>
            <section>
                <small>Built with precision. Trusted for impact. © 2025 Dexter's Lahb.</small>
            </section>
        </footer>
    )
}

export default Footer