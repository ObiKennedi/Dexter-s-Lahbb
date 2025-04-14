import { useState } from "react"
import Globe from 'react-globe.gl';

import "./index.scss"

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('obikennedy05@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section id="about">
            <div>
                <div>
                    <img src={"/assets/avatar.png"} alt="avatar" />
                    <div>
                        <h4>Welcome:</h4>
                        <div>
                            <p>At Dexter's Lahb, we craft high performance websites and applications with clean codes, intuitive designs, and relentless attention to detail. Whether you're launching a cutting-edge platform or revitalizing an outdated site, our expert team delivers seamless digital experiences that drive results</p>
                            <p>We're a tight-knit teams of tech specialists who thrive on solving complex problems with elegant solutions. From sleek, scalable web builds to mission-critical rescues to failing sites, we ensure your digital presence is fast, functional, and future proof.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={"/assets/contact.png"} alt="contact" />
                    <div onClick={handleCopy}>
                        <img src={hasCopied ? "/assets/copied.png" : "/assets/copy.png"} alt="" />
                        <div>dexterslahb@dl.com</div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <Globe
                            height={200}
                            width={200}
                            backgroundColor="rgba(0, 0, 0, 0)"
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[
                                {
                                    lat: 5.4833,
                                    lng: 7.0333,
                                    text: 'Owerri, Nigeria',
                                    color: 'white',
                                    size: 15
                                }
                            ]}
                        />
                        <div>
                            <h4>Location</h4>
                            <div>
                                <p>We're based in Owerri, Imo state, Nigeria.</p>
                                <p>We handle remote jobs from all over the world, so you don't have to worry about location, timezones and communication.</p>
                                <p>Just reach out to us and we'll deliver.</p>
                            </div>
                        </div>
                        <a href="#contact">
                            <button>Contact me</button>
                        </a>
                    </div>
                    <div>
                        <img src={"/assets/skill-stack.png"} alt="tech-stack" />
                        <div>
                            <h4>Tech stack</h4>
                            <div>We use a wide range of modern tools like React and Next.js to create high performance apps and websites - no clunky code, no endless loading times,just, powerful solutions, tailored to your needs.</div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={"/assets/vision-key.png"} alt="keyboard" />
                    <div>
                        <h4>Why we code?</h4>
                        <div>To be honest, there's no grand vision behind this endeavor. We're just a team of curious nerds, dancing on the border between chaos and value — building things we believe in, breaking what needs breaking, and crafting experiences that somehow make the digital world feel a little more human. We experiment, we iterate, and occasionally, we ship magic.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About