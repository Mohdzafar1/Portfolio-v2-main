import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 4rem 1.5rem;
  background: #0f0f0f;
  color: #ffffff;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #23ce6b;
  }

  .projects {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }

  .project {
    background: #161616;
    border-radius: 14px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .project:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .project-links {
    display: flex;
    gap: 0.75rem;
  }

  .project-links img {
    width: 22px;
    height: 22px;
    transition: transform 0.3s ease;
  }

  .project-links img:hover {
    transform: scale(1.15);
  }

  .body {
    flex: 1;
  }

  .project-img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  .body h3 {
    font-size: 1.25rem;
    margin-bottom: 0.6rem;
    color: #ffffff;
  }

  .body p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #cfcfcf;
  }

  footer {
    margin-top: 1.5rem;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    padding: 0;
    list-style: none;
  }

  .tech-list li {
    background: rgba(35, 206, 107, 0.15);
    color: #23ce6b;
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    white-space: nowrap;
  }

  /* ================= MOBILE ================= */
  @media (max-width: 768px) {
    padding: 3rem 1rem;

    h2 {
      font-size: 2rem;
    }

    .project-img {
      height: 160px;
    }
  }

  /* ================= SMALL MOBILE ================= */
  @media (max-width: 480px) {
    h2 {
      font-size: 1.8rem;
    }

    .project {
      padding: 1.2rem;
    }

    .project-img {
      height: 140px;
    }

    .body h3 {
      font-size: 1.1rem;
    }
  }
`;
