import styled from "styled-components";

const bgDeskTop = require("../../assets/destination/background-destination-desktop.jpg");
const bgTablet = require("../../assets/destination/background-destination-tablet.jpg");
const bgMobile = require("../../assets/destination/background-destination-mobile.jpg");

const Div = styled.div`
  color: white;
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
