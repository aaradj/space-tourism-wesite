import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";

interface PageProps {
  children: React.ReactNode;
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const PageLayout = (props: PageProps) => {
  return (
    <div>
      <Container>
        <Navbar />
        {props.children}
      </Container>
    </div>
  );
};
export default PageLayout;
