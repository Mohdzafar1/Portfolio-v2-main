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

  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .testimonial-card {
    background: #f8fafc;
    border-radius: 1.6rem;
    padding: 2.6rem;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    }

    .rating {
      color: #22c55e;
      font-size: 1.6rem;
      margin-bottom: 1.4rem;
      display: flex;
      gap: 0.4rem;
    }

    .review {
      font-size: 1.45rem;
      line-height: 1.7;
      color: #334155;
      margin-bottom: 2rem;
    }

    .client {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      .avatar {
        width: 42px;
        height: 42px;
        background: #dcfce7;
        color: #22c55e;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.6rem;
      }

      strong {
        display: block;
        font-size: 1.4rem;
      }

      span {
        font-size: 1.2rem;
        color: #64748b;
      }
    }
  }

  @media (max-width: 1024px) {
    .testimonial-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .testimonial-grid {
      grid-template-columns: 1fr;
    }
  }
`;
