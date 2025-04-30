import { servicesSlide } from "../../constants";
import { useEffect, useState } from "react";
import "./index.scss"

const ServiceSlide = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % servicesSlide.length);
        }, 4000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="footer-slider">
            <div key={current} className="fade">
                <h4>{servicesSlide[current].title}</h4>
                <p>{servicesSlide[current].description}</p>
            </div>
        </div>
    );
}

export default ServiceSlide