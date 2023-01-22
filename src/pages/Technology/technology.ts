import styled from "styled-components";
const bgDeskTop = require("../../assets/technology/background-technology-desktop.jpg");
const bgTablet = require("../../assets/technology/background-technology-tablet.jpg");
const bgMobile = require("../../assets/technology/background-technology-mobile.jpg");
const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: end;
  background: url(${bgDeskTop});
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  color: white;
  padding: 10rem 0 1rem 3rem;
  @media (max-width: 1300px) {
    background: url(${bgTablet});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 8rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    background: url(${bgMobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 4rem 1rem 1rem 1rem;
  }
  @media (max-height: 820px) {
    height: fit-content;
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
  @media (max-width: 1300px) {
    p {
      font-size: 1.2rem;
    }
  }
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    z-index:0;
    width: 10%;
    height: 100%;
    display: grid;
    place-items: center;
    place-content: center;
    li {
      margin: 1.5rem 0;
      width: 100px;
      height: 100px;
      border: 2px solid white;
      border-radius: 50%;
      overflow: hidden;
      a {
        display: block;
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        font-size: 2.2rem;
      }
    }
  }
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 0 4rem;
    .text {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      aling-items: start;
      div {
        margin: 1rem 0;
      }
      .title {
        text-transform: uppercase;
        p {
          font-size: 1.2rem;
          color: grey;
          margin: 1rem 0;
        }
        h3 {
          font-size: 3rem;
          font-weight: 400;
          color: white;
        }
      }
      .description {
        p {
          font-size: 1.2rem;
          color: grey;
          line-height: 1.8rem;
        }
      }
    }
    .image {
      width: 50%;
      text-align: end;
      img {
        width: 80%;
        border-radius: 5%;
      }
    }
  }
  @media(max-width:1300px){
    flex-direction:column;
    ul{
      width:100%;
      display:flex;
      li{
        width:60px;
        height:60px;
        margin:2rem 1rem;
        a{
          font-size:1.5rem;
        }
      }
    }
    .container{
      padding:0;
      flex-direction:column;
      .text{
        margin:1.5rem 0;
        width:100%;
        text-align:center;
        div{
          margin 1.3rem 0;
        }
      }
      .image{
        width:100%;
        text-align:center;
      }
    }
  }
  @media(max-width:700px){
    ul{
      width:100%;
      display:flex;
      li{
        width:50px;
        height:50px;
        a{
          font-size:1.1rem;
        }
      }
    }
    .container{
      padding:0;
      flex-direction:column;
      .text{
        margin: 0;
        .title{
          p{
            font-size:1rem;
          }
          h3{
            font-size:2rem;
          }
        }
        .description{
          p{
            font-size:1rem;
          }
        }
      }
      .image{
        width:100%;
        img{
          width:100%;
        }
      }
    }
  }
`;

export { Div, TextTitle, Main };
