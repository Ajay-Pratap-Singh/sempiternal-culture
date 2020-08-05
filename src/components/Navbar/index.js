import React from 'react';
import styled from 'styled-components'
import LinksList from './LinksList/'

const StyledNav = styled.nav`
    z-index: 100;
    display: flex;
    flex-flow: column nowrap;
    min-height:100vh;
    width: 300px;
    background-color: #151515;
    padding-top: 6.4rem;
    padding-right: 3.2rem;
    padding-left: 4.4rem;
    overflow-y: auto;
    overflow-x: hidden;
`

const Brand = styled.div`
    font-family: "Heebo", sans-serif;
    color: white;
    font-weight: bold;
    font-size: 25px;
    justify-content: center;
    line-height: 1.2;
    margin-top: 6rem;
    margin-bottom: 1.6rem;
`

export default function Navbar(props){
    return (<StyledNav>
        <Brand>
            The Sempiternal Culture.
        </Brand>
        <LinksList/>
    </StyledNav>);
}