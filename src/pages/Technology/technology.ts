import styled from "styled-components";

const bgDeskTop = require("../../assets/technology/background-technology-desktop.jpg");
const bgTablet = require("../../assets/technology/background-technology-tablet.jpg");
const bgMobile = require("../../assets/technology/background-technology-mobile.jpg");

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${bgDeskTop});
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  color: white;
  padding-top: 10rem;
  @media (max-width: 1300px) {
    background: url(${bgTablet});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  @media (max-width: 700px) {
    background: url(${bgMobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export { Div };
