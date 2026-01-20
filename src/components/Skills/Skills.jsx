import { Container } from "./styles";
import {
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

export function Skills() {
  return (
    <Container id="skills">
      <header>
        <h2 style={{color:"#23ce6b"}}>Skills & Technologies</h2>
        <p>Tools and technologies I use to build modern applications</p>
      </header>

      <div className="skills-grid">

        {/* FRONTEND */}
        <div className="skill-card">
          <FaReact className="icon" />
          <h3 style={{color:"#23ce6b"}}>React.js</h3>
          <p>Building fast, reusable, and component-driven user interfaces.</p>
        </div>

        <div className="skill-card">
          <SiNextdotjs className="icon" />
          <h3 style={{color:"#23ce6b"}}>Next.js</h3>
          <p>Server-side rendering and SEO-friendly React applications.</p>
        </div>

        <div className="skill-card">
          <SiJavascript className="icon" />
          <h3 style={{color:"#23ce6b"}}>JavaScript</h3>
          <p>Core language for interactive and dynamic web applications.</p>
        </div>

        <div className="skill-card">
          <SiTypescript className="icon" />
          <h3 style={{color:"#23ce6b"}}>TypeScript</h3>
          <p>Type-safe JavaScript for scalable and maintainable projects.</p>
        </div>

        <div className="skill-card">
          <SiHtml5 className="icon" />
          <h3 style={{color:"#23ce6b"}}>HTML5</h3>
          <p>Semantic and accessible markup for modern web experiences.</p>
        </div>

        <div className="skill-card">
          <SiCss3 className="icon" />
          <h3 style={{color:"#23ce6b"}}>CSS3</h3>
          <p>Responsive layouts with Flexbox, Grid, and modern styling.</p>
        </div>

        {/* BACKEND */}
        <div className="skill-card">
          <FaNodeJs className="icon" />
          <h3 style={{color:"#23ce6b"}}>Node.js</h3>
          <p>High-performance backend services using JavaScript runtime.</p>
        </div>

        <div className="skill-card">
          <SiExpress className="icon" />
          <h3 style={{color:"#23ce6b"}}>Express.js</h3>
          <p>Fast and minimal framework for RESTful APIs.</p>
        </div>

        {/* DATABASE */}
        <div className="skill-card">
          <SiMongodb className="icon" />
          <h3 style={{color:"#23ce6b"}}>MongoDB</h3>
          <p>NoSQL database for flexible and scalable data storage.</p>
        </div>

        <div className="skill-card">
          <SiMysql className="icon" />
          <h3 style={{color:"#23ce6b"}}>MySQL</h3>
          <p>Reliable relational database for structured data.</p>
        </div>

        {/* MOBILE & TOOLS */}
        <div className="skill-card">
          <FaMobileAlt className="icon" />
          <h3 style={{color:"#23ce6b"}}>React Native</h3>
          <p>Cross-platform mobile apps with native performance.</p>
        </div>

        <div className="skill-card">
          <FaGitAlt className="icon" />
          <h3 style={{color:"#23ce6b"}}>Git & GitHub</h3>
          <p>Version control and collaborative development workflows.</p>
        </div>

      </div>
    </Container>
  );
}
