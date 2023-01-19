import { Header } from "./navbarstyle";

const Navbar = () => {
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
    </Header>
  );
};

export default Navbar;
