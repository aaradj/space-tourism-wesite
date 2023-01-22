import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Fspliter } from "../../helper";
interface Lists {
  path: string;
  name: string;
  number: string;
  _id: number;
}
const lists: Lists[] = [
  {
    path: "/",
    name: "home",
    number: "00",
    _id: 1,
  },
  {
    path: "/destination/moon",
    name: "destination",
    number: "01",
    _id: 2,
  },
  {
    path: "/crew/douglas",
    name: "crew",
    number: "02",
    _id: 3,
  },
  {
    path: "/technology/lounch",
    name: "technology",
    number: "03",
    _id: 4,
  },
];
const Navbar = () => {
  const location = useLocation();
  const [close, setClose] = useState(true);
  //styles
  const Header = styled.header`
    width: 100%;
    height: 5vh;
    position: fixed;
    top: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      padding: 2rem 3rem;
      svg {
        width: 48px;
        height: 48px;
      }
    }
    .line {
      width: 35%;
      position: absolute;
      right: 48%;
      z-index: 3;
      height: 1px;
      background: grey;
    }
    @media (max-width: 1300px) {
      top: 0;
      height: 10vh;
      padding: 3rem 0;
      .logo {
        width: 30%;
      }
      .line {
        display: none;
      }
    }
    @media (max-width: 700px) {
      ${close ? null : `height:100vh;`}
      .logo {
        padding: 1rem;
        ${close ? null : `display:none;`}
      }
    }
  `;
  const Nav = styled.div`
    .menu {
      display: none;
    }
    .menu-close {
      display: none;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 0.7rem;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      li {
        padding: 2.3rem 1.5rem;
      }
      li a {
        color: white;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        span {
          font-weight: bold;
          font-size: 1rem;
          margin: 0 0.2rem;
        }
      }
    }
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    @media (max-width: 1300px) {
      width: 70%;
      ul {
        li {
          padding: 2.3rem 0.7rem;
        }
        li a {
          font-size: 0.7rem;
          span {
            font-size: 0.8rem;
          }
        }
      }
    }
    @media (max-width: 700px) {
      .menu-close {
        display: block;
      }
      .menu {
        display: block;
        position: absolute;
        right: 2rem;
      }
      ul {
        width: 100%;
        height: 100vh;
        flex-direction: column;
        justify-content: space-around;
        ${close
          ? `transform:translateX(180%);
        `
          : `transform:translateX(0);   
`}
        li {
          padding: 1rem;
        }
      }
      width: 100%;
      height: 100vh;
    }
  `;
  return (
    <Header>
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg">
          <g>
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
          </g>
        </svg>
      </div>
      <div className="line"></div>
      <Nav>
        <div className="menu" onClick={(): any => setClose(!close)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        </div>
        <ul>
          {close ? null : (
            <div className="menu-close" onClick={() => setClose(!close)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25">
                <g fill="#D0D6F9" fillRule="evenodd">
                  <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                  <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                </g>
              </svg>
            </div>
          )}
          {lists.map((list) => {
            return (
              <li
                style={{
                  borderBottom: `${
                    Fspliter(location.pathname) === Fspliter(list.path)
                      ? "4px solid white"
                      : null
                  }`,
                }}
                key={list._id}
              >
                <Link to={list.path} onClick={() => setClose(!close)}>
                  <span>{list.number}</span> {list.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </Nav>
    </Header>
  );
};
export default Navbar;
