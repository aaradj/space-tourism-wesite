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
  @media (max-height:700px){
    height:fit-content;
  }
`;

const Nav = styled.div`
  margin: 3rem 0 3rem 0;
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

export { Div, Nav };
