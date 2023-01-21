import styled from "styled-components";
const bgDeskTop = require("../../assets/home/background-home-desktop.jpg");
const bgTablet = require("../../assets/home/background-home-tablet.jpg");
const bgMobile = require("../../assets/home/background-home-mobile.jpg");
const Div = styled.div`
  width: 100%;
  height:100vh;
  display: flex;
  align-items: center;
  background: url(${bgDeskTop});
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  color: white;
  padding: 10rem 10rem 0 10rem;
  @media (max-width: 1300px) {
    flex-direction: column;
    background: url(${bgTablet});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 8rem 5rem 0 5rem;
  }
  @media (max-width: 700px) {
    background: url(${bgMobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 8rem 1rem 0 1rem;
  }
  @media (max-height:700px){
    height:fit-content;
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  .text {
    font-family: BenchNine;
    font-size: 2rem;
    font-weight: 400;
    color: rgb(199, 204, 208);
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }
  .title {
    font-size: 10rem;
    text-transform: uppercase;
    font-weight: 300;
    color: white;
    font-family: "Times New Roman", Times, serif;
  }
  .paragraph {
    letter-spacing: 0.5px;
    line-height: 2rem;
    font-size: 1.2rem;
    color: rgb(199, 204, 208);
  }
  div {
    margin-bottom: 2rem;
  }

  @media (max-width: 1300px) {
    .text {
      font-size: 1.5rem;
    }
    .title{
      font-size:6rem;
    }
    .paragraph{
      font-size:1rem;
    }
    div{
      margin-bottom:1rem;
    }
    align-items: center;
    width: 100%;
    text-align:center;
    margin-bottom:4rem;
  }
  @media(max-width:700px){
    .text {
      font-size: 1.2rem;
    }
    .title{
      font-size:4rem;
    }
    .paragraph{
      font-size:.8rem;
    }
    div{
      margin-bottom:2rem;
    }
    align-items: center;
    width: 100%;
    text-align:center;
  }
  }
`;
const ExploreLogo = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  div {
    width: 300px;
    height: 300px;
    border-radius: 100%;
    background: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: rgb(37, 36, 36);
    text-transform: uppercase;
    font-family: "Times New Roman", Times, serif;
    }
  }
  @media(max-width:1300px){
    width:100%;
    div{
      width:250px;
      height:250px;
      font-size:2rem;
    }
  }
  @media(max-width:700px){
    width:100%;
    div{
      width:200px;
      height:200px;
      font-size:1.8rem;
    }
  }
  
`;
export { Div, Texts, ExploreLogo };
