import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>
          Let’s Build Something <span>Great</span>
        </h2>
        <p>
          Ready to scale your next digital product? Contact us now for a
          <strong> free 30-minute strategy session.</strong>
        </p>
      </header>

      <div className="contact-cards">
        <a href="mailto:arsalankaiser@gmail.com" className="card">
          <img src={emailIcon} alt="Email" />
          <div>
            <small>Email Us</small>
            <strong>arsalankaiser@gmail.com</strong>
          </div>
        </a>

        <a href="tel:+919045427306" className="card">
          <img src={phoneIcon} alt="Phone" />
          <div>
            <small>Call Directly</small>
            <strong>(+91) 90454 27306</strong>
          </div>
        </a>
      </div>

      <div className="form-box">
        <h3>Get in touch using the form</h3>

        <form>
          <div className="row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Company Email" />
          </div>

          <textarea placeholder="Tell us about your project goals and timeline..." />

          <button type="submit">
            Send Message →
          </button>

          <div className="meta">
            <span>🔒 Secure SSL</span>
            <span>⚡ Response in 24h</span>
          </div>
        </form>
      </div>
    </Container>
  );
}
