import { Container } from "./styles";
import { 
  FaReact, 
  FaNodeJs, 
  FaMobileAlt, 
  FaDatabase 
} from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

export function Services() {
  return (
    <Container id="services">
      <header>
        <h2 style={{color:"#23ce6b"}}>Our Services</h2>
        <p>Modern, scalable solutions tailored for your business</p>
      </header>

      <div className="services-grid">

        {/* FRONTEND */}
        <div className="service-card">
          <div className="icon">
            <FaReact />
          </div>
          <h3 style={{color:"#23ce6b"}}>Frontend Development</h3>
          <p>
            High-performance user interfaces using modern frameworks.
          </p>
          <span>
            <FaReact /> React.js &nbsp;|&nbsp; <SiNextdotjs /> Next.js
          </span>
        </div>

        {/* BACKEND */}
        <div className="service-card">
          <div className="icon">
            <FaNodeJs />
          </div>
          <h3 style={{color:"#23ce6b"}}>Backend Development</h3>
          <p>
            Secure and scalable server-side solutions with REST APIs.
          </p>
          <span>
            <FaNodeJs /> Node.js &nbsp;|&nbsp; <SiExpress /> Express.js
          </span>
        </div>

        {/* DATABASE */}
        <div className="service-card">
          <div className="icon">
            <FaDatabase />
          </div>
          <h3 style={{color:"#23ce6b"}}>Database Management</h3>
          <p>
            Reliable data storage solutions for structured and unstructured data.
          </p>
          <span>
            <SiMongodb /> MongoDB &nbsp;|&nbsp; <SiMysql /> MySQL
          </span>
        </div>

        {/* MOBILE */}
        <div className="service-card">
          <div className="icon">
            <FaMobileAlt />
          </div>
          <h3 style={{color:"#23ce6b"}}>Mobile App Development</h3>
          <p>
            Cross-platform mobile apps with native performance.
          </p>
          <span>
            <FaReact /> React Native
          </span>
        </div>

      </div>
    </Container>
  );
}
