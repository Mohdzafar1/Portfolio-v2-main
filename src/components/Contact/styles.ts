import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;
  padding: 0 2rem;
  color: #fff;

  header {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 4rem;

    h2 {
      font-size: 3.5rem;
      font-weight: 700;

      span {
        color: var(--green);
      }
    }

    p {
      margin-top: 1rem;
      color: #bdbdbd;
      line-height: 1.6;
    }
  }

  /* CONTACT CARDS */
  .contact-cards {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-bottom: 4rem;

    .card {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      background: linear-gradient(135deg, #2ecc71, #27ae60);
      padding: 1.8rem 2.4rem;
      border-radius: 1.4rem;
      min-width: 320px;
      color: #0f0f0f;
      transition: transform 0.25s, box-shadow 0.25s;

      img {
        width: 36px;
      }

      small {
        font-size: 1.2rem;
        opacity: 0.8;
      }

      strong {
        font-size: 1.4rem;
      }

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(46, 204, 113, 0.35);
      }
    }
  }

  /* FORM BOX */
  .form-box {
    max-width: 900px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 2rem;
    padding: 3rem;
    backdrop-filter: blur(10px);

    h3 {
      text-align: center;
      margin-bottom: 2.5rem;
      font-size: 1.8rem;
    }

    form {
      .row {
        display: flex;
        gap: 1.6rem;
        margin-bottom: 1.6rem;
      }

      input,
      textarea {
        width: 100%;
        background: #0f172a;
        border: 1px solid #1e293b;
        border-radius: 1rem;
        padding: 1.4rem;
        color: #fff;
        font-size: 1.4rem;

        &::placeholder {
          color: #64748b;
        }

        &:focus {
          outline: none;
          border-color: var(--green);
        }
      }

      textarea {
        min-height: 140px;
        resize: none;
        margin-bottom: 2.5rem;
      }

      button {
        display: block;
        margin: 0 auto;
        background: var(--green);
        color: #0f0f0f;
        border: none;
        padding: 1.4rem 3.5rem;
        border-radius: 3rem;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(46, 204, 113, 0.4);
        }
      }

      .meta {
        margin-top: 1.5rem;
        display: flex;
        justify-content: center;
        gap: 2rem;
        font-size: 1.2rem;
        color: #94a3b8;
      }
    }
  }

  @media (max-width: 768px) {
    header h2 {
      font-size: 2.6rem;
    }

    .contact-cards {
      flex-direction: column;
      align-items: center;
    }

    .form-box form .row {
      flex-direction: column;
    }
  }
`;
