import styled from "styled-components";

const bgDeskTop = require("../../assets/destination/background-destination-desktop.jpg");
const bgTablet = require("../../assets/destination/background-destination-tablet.jpg");
const bgMobile = require("../../assets/destination/background-destination-mobile.jpg");

const Div = styled.div`
  color: white;
  width: 100%;

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${bgDeskTop});
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  padding-top: 10rem;
  @media (max-width: 1300px) {
    padding: 5rem 0 1rem 0;
  }
  @media (max-width: 700px) {
    padding-top: 3rem;
  }
  @media (max-height: 920px) {
    height: fit-content;
  }
  @media(min-height:850px){
    padding-bottom:2rem;
  }
`;

const Nav = styled.div`
  margin: 3rem 0 3rem 0;
  z-index:0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  .title {
    padding-bottom: 2rem;
    width: 50%;
    align-self: start;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    font-family: BenchNine;
    word-spacing: 0.5rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    span {
      font-weight: 500;
      color: grey;
      letter-spacing: normal;
      margin: 0 1rem;
    }
  }
  ul {
    width: 50%;
    display: flex;
    align-items: center;
    align-self: end;
    li {
      padding: 0 2rem;
      a {
        z-index:1;
        font-family: BenchNine;
        font-size: 1.5rem;
        text-transform: uppercase;
      }
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    .title {
      font-size: 1.5rem;
      width: 100%;
      margin: 0;
    }
    ul {
      width: 100%;
      justify-content: center;
      li {
        padding: 0 1rem;
        a {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    .title {
      font-size: 1.3rem;
    }
    ul {
      li {
        padding: 0 1.4rem;
      }
    }
  }
`;


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
export { Div, Nav , Container, Image, Text };
