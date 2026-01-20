import { Container } from "./styles";
import { FaStar } from "react-icons/fa";

export function Testimonials() {
  return (
    <Container id="testimonials">
      <header>
        <h2>What Clients Say</h2>
        <p>Trusted by startups and businesses worldwide</p>
      </header>

      <div className="testimonial-grid">

        <div className="testimonial-card">
          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="review">
            “Amazing frontend work! The React and Next.js implementation was
            fast, clean, and perfectly optimized for performance.”
          </p>
          <div className="client">
            <div className="avatar">A</div>
            <div>
              <strong>Arjun Mehta</strong>
              <span>Startup Founder</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="review">
            “Backend APIs were well-structured and scalable. Node.js + MongoDB
            setup worked flawlessly for our product.”
          </p>
          <div className="client">
            <div className="avatar">S</div>
            <div>
              <strong>Shubham Verma</strong>
              <span>Tech Lead</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="review">
            “The React Native app feels smooth and native on both platforms.
            Highly recommended for mobile development.”
          </p>
          <div className="client">
            <div className="avatar">R</div>
            <div>
              <strong>Ritika Sharma</strong>
              <span>Product Manager</span>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
}
