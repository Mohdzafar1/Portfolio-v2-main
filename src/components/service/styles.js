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
      color: #94a3b8;
      margin-top: 0.8rem;
    }
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .service-card {
    background: #f8fafc;
    border-radius: 1.6rem;
    padding: 2.4rem;
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    }

    .icon {
      width: 48px;
      height: 48px;
      background: #dcfce7;
      color: #22c55e;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.2rem;
      margin-bottom: 1.6rem;
    }

    h3 {
      font-size: 1.6rem;
      margin-bottom: 0.6rem;
    }

    p {
      font-size: 1.4rem;
      color: #64748b;
      margin-bottom: 1.2rem;
      line-height: 1.6;
    }

    span {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 1.3rem;
      color: #0f172a;
      font-weight: 500;
    }
  }

  @media (max-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .services-grid {
      grid-template-columns: 1fr;
    }
  }
`;
