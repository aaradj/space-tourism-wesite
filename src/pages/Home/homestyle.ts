import styled from "styled-components";

const bgDeskTop = require("../../assets/home/background-home-desktop.jpg");
const bgTablet = require("../../assets/home/background-home-tablet.jpg");
const bgMobile = require("../../assets/home/background-home-mobile.jpg");

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
  @media (max-width:700px){
    background: url(${bgMobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export { Div };
