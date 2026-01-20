import styled from "styled-components";

export const Container = styled.section`
  margin-top: 8rem;
  padding: 0 2rem;

  header {
    text-align: center;
    margin-bottom: 4rem;

    h2 {
      font-size: 3rem;
      font-weight: 700;
    }

    p {
      margin-top: 0.8rem;
      color: #94a3b8;
    }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .skill-card {
    background: #f8fafc;
    border-radius: 1.6rem;
    padding: 2.4rem;
    border: 1px solid #e5e7eb;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    }

    .icon {
      font-size: 3.4rem;
      color: #22c55e;
      margin-bottom: 1.4rem;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.6rem;
    }

    p {
      font-size: 1.35rem;
      color: #64748b;
      line-height: 1.6;
    }
  }

  @media (max-width: 1024px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .skills-grid {
      grid-template-columns: 1fr;
    }
  }
`;
