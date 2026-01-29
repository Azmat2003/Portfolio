import { useState } from "react";
import "../styles/Contact.css";

const ContactMe = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    try {
      const res = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <h2>Get In Touch</h2>
        <p className="subtitle">Have a project or question? Let’s connect.</p>

        <form onSubmit={handleSubmit}>
          {/* Honeypot field (anti-spam) */}
          <input type="text" name="_gotcha" className="honeypot" />

          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            required
          />

          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="success">Thanks! I’ll get back to you soon 🚀</p>
          )}
          {status === "error" && (
            <p className="error">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;

