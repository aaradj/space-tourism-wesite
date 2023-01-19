import React from 'react';
import styled from "styled-components";
import Navbar from '../Navbar';


interface PageProps{
    children:React.ReactNode;
}


const PageLayout = (props:PageProps) => {
    return (
        <div>
            <Navbar/>
            {props.children}
        </div>
    );
};

export default PageLayout;