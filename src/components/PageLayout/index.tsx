import React from 'react';
import styled from "styled-components";
import Navbar from '../Navbar';


interface PageProps{
    children:React.ReactNode;
}


const Container = styled.div`
background:black;
color:white;
width:100%;
height:100vh;
padding:2rem;
`
const PageLayout = (props:PageProps) => {
    return (
        <Container>
            <Navbar/>
            {props.children}
        </Container>
    );
};

export default PageLayout;