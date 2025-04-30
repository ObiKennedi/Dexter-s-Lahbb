import { useState } from "react";
import emailjs from "emailjs-com";
import "./index.scss";

const Contact = () => {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        fullName: false,
        email: false,
        message: false,
    });

    const isFormValid = form.fullName && form.email && form.message;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setErrors({ ...errors, [name]: value.trim() === "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            fullName: form.fullName.trim() === "",
            email: form.email.trim() === "",
            message: form.message.trim() === "",
        };

        setErrors(newErrors);

        if (Object.values(newErrors).some(Boolean)) return;

        setLoading(true);

        emailjs
            .send(
                "service_jheng59",
                "template_p1kd9ee",
                {
                    from_name: form.fullName,
                    from_email: form.email,
                    message: form.message,
                },
                "U9YGI7PvLSXycH7Te"
            )
            .then(() => {
                alert("Message sent successfully!");
                setForm({ fullName: "", email: "", message: "" });
            })
            .catch((err) => {
                console.error("Failed to send email:", err);
                alert("Something went wrong. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section id="contact">
            <img src="/assets/avatar.jpg" alt="avatar" />
            <div>
                <div>
                    <h2>Send us a message</h2>
                    <p>
                        Whether you're looking to build a new website, improve your existing
                        platform, or bring a unique project to life, we can help.
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullName">Full name</label>
                        <input
                            type="text"
                            placeholder="ex:... Obi Kennedy"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                        />
                        {errors.fullName && <small>Please enter your full name</small>}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="ex:... obikennedy@gmail.com"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        {errors.email && <small>Please enter a valid email</small>}
                    </div>
                    <div>
                        <label htmlFor="message">Your message</label>
                        <textarea
                            name="message"
                            placeholder="Give us your opinion."
                            value={form.message}
                            onChange={handleChange}
                        />
                        {errors.message && <small>Please enter your message</small>}
                    </div>
                    <button 
                        type="submit" 
                        disabled={!isFormValid || loading}
                        className={!isFormValid || loading ? "": "active"}
                    >
                        {loading ? "Please wait..." : "Send your message"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
