import "./index.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Subscribe = () => {
    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_jheng59",       
                "template_p1kd9ee",      
                form.current,
                "U9YGI7PvLSXycH7Te"        
            )
            .then(() => {
                alert("Successfully subscribed");
                form.current.reset();
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                alert("Something went wrong. Please try again.");
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="subscribe">
            <h2>Keep in touch</h2>
            <p>
                Don't miss out on our updates and programs,
                the solution you need might just be lurking around
            </p>
            <div>
                <input 
                    type="email" 
                    name="user_email" 
                    placeholder="Enter your email address" 
                    required 
                />
                <button type="submit">
                    <img src="/assets/send.gif" alt="send" />
                </button>
            </div>
        </form>
    );
};

export default Subscribe;
