import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "../Project/styles"
import img1 from "../../assets/project1.png";
import img2 from "../../assets/project3.png";
import img3 from "../../assets/project-2.png";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>

      <div className="projects">

        {/* ================= PROJECT 1 ================= */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              {/* <div className="project-links">
                <a href="https://github.com/CodeVinayak/MultilingualVQA" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div> */}
            </header>

            <div className="body">
              <img src={img1} alt="Multilingual VQA" className="project-img" />
              <h3>Medical</h3>
              <p>
                A secure medical appointment scheduling system with patient history management and role-based access
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>ReactJs</li>
                <li>React-icons</li>
                <li>Toastify-Notification</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* ================= PROJECT 2 ================= */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              {/* <div className="project-links">
                <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div> */}
            </header>

            <div className="body">
              <img src={img2} alt="Serverless Voting App" className="project-img" />
              <h3>E-commerce Application</h3>
              <p>
               An e-commerce website for browsing products, adding items to cart, and placing orders online.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>NextJs</li>
                <li>Axios</li>
                {/* <li>DynamoDB</li> */}
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* ================= PROJECT 3 ================= */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <div className="project-links">
                {/* <a href="https://github.com/CodeVinayak/AI-Chatbot-Assistant" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a> */}
                {/* <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live" />
                </a> */}
              </div>
            </header>

            <div className="body">
              <img src={img3} alt="AI Chatbot" className="project-img" />
              <h3>Inventory Dashboard</h3>
              <p>
               A centralized inventory dashboard for monitoring stock, managing products, and reducing shortages.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>Streamlit</li>
                <li>PyPDF2</li>
                <li>LangChain</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* ================= REST PROJECTS (NO IMAGES) ================= */}
        {/* Keep your remaining projects exactly as they were */}
        
      </div>
    </Container>
  );
}
