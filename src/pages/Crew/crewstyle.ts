import styled from "styled-components";

const bgDeskTop = require("../../assets/crew/background-crew-desktop.jpg");
const bgTablet = require("../../assets/crew/background-crew-tablet.jpg");
const bgMobile = require("../../assets/crew/background-crew-mobile.jpg");

const Div = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: start;
  background: url(${bgDeskTop});
  background-position: center;
  background-size: cover;
  background-repeat: epeat;
  background-attachment: fixed;
  color: white;
  padding-top: 10rem;
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    li {
      margin: 0 1rem;
      overflow: hidden;
      width: 20px;
      height: 20px;
      cursor: pointer;
      border-radius: 50%;
      border: 1px solid white;
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  @media (max-width: 1300px) {
    background: url(${bgTablet});
    padding: 8rem 3rem 1rem 3rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    ul {
      justify-content: center;
      li {
        width: 15px;
        height: 15px;
      }
    }
  }
  @media (max-width: 700px) {
    background: url(${bgMobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 4rem 1rem 1rem 1rem;
    justify-content: space-around;
  }
`;

const TextTitle = styled.div`
  width: 100%;
  p {
    font-size: 2rem;
    font-weight: 500;
    font-family: BenchNine;
    word-spacing: 0.5rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    span {
      color: grey;
      letter-spacing: normal;
      margin: 0 1rem;
    }
  }
  @media (max-width: 1300px) {
    text-align: center;
    p {
      font-size: 1.5rem;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .description {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    div {
      margin: 0 0 2rem 0;
      .role {
        font-size: 2rem;
        text-transform: uppercase;
      }
      h3 {
        font-size: 3.5rem;
        text-transform: uppercase;
        color: white;
        font-weight: 400;
      }
      .bio {
        font-size: 1.2rem;
        line-height: 1.7rem;
      }
    }
  }
  .image {
    width: 50%;
    text-align: center;
    img {
      width: 60%;
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    .description {
      width: 100%;
      text-align: center;
      div {
        margin: 0 0 1rem 0;
        width: 100%;
        .role {
          font-size: 1.8rem;
        }
        h3 {
          font-size: 2.6rem;
        }
        .bio {
          font-size: 1rem;
        }
      }
    }
    .image {
      width: 100%;
      img {
        width: 30%;
      }
    }
  }
  @media (max-width: 700px) {
    .description {
      div {
        margin: 0 0 1.5rem 0;
        width: 100%;
        .role {
          font-size: 1.3rem;
        }
        h3 {
          font-size: 1.7rem;
        }
        .bio {
          font-size: 0.8rem;
        }
      }
    }
    .image {
      img {
        width: 50%;
      }
    }
  }
`;

export { Div, TextTitle, Container };
