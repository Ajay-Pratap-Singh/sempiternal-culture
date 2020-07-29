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

export default function Navbar(props){
    return (<StyledNav>
        <LinksList/>
    </StyledNav>);
}