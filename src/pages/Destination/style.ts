import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 8rem;
  display: flex;
  align-items: center;
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem 3rem;
  }
  @media (max-width: 700px) {
    padding: 0 1rem;
  }
`;
const Image = styled.div`
  width: 50%;
  text-align: center;
  img {
    width: 60%;
  }
  @media (max-width: 1300px) {
    img {
      width: 50%;
    }
    width: 100%;
  }
`;
const Text = styled.div`
  width: 50%;
  height: 100%;
  dislay: flex;
  flex-direction: column;
  align-items: start;
  div {
    margin: 2rem 1rem;
  }
  .description {
    border-bottom: 1px solid white;
    h2 {
      font-size: 6rem;
      text-transform: uppercase;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.1rem;
      letter-spacing: 0.1rem;
      word-spacing: 0.2rem;
      line-height: 1.8rem;
    }
  }
  .times {
    display:flex;
    align-items:center;
    p {
      margin-bottom: 1rem;
      font-weight: 400;
      font-family: BenchNine;
    }
    .bold {
      font-size: 2.4rem;
      font-weight: 600;
      font-family: BenchNine;
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    text-align: center;
    div {
      margin: 1rem 0.5rem;
    }
    .description {
      h2 {
        font-size: 4rem;
      }
      p {
        font-size: 1rem;
        letter-spacing: 1px;
        text-align: start;
        word-spacing: 0.1rem;
        line-height: 1.6rem;
      }
    }
    .times {
      justify-content: space-evenly;
      .bold {
        font-size: 1.8rem;
      }
  }
  }
  @media (max-width: 700px) {
    height: 100%;
    div {
      margin: 2rem 0.5rem;
    }
    .description {
      h2 {
        font-size: 2rem;
      }
      p {
        font-family: 0.9rem;
        letter-spacing: normal;
      }
    }
  }
  .times {
    .bold {
      font-size: 1.6rem;
    }
  }
`;
export { Container, Image, Text };
