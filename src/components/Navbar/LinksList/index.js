import React from 'react';
import styled from 'styled-components'
import LinkItem from './LinkItem'

const StyledUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: "Heebo", sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-top: 3.2rem;
    line-height: 4.4rem;
`

export default function LinksList(props){
    return (<StyledUl>
        <LinkItem url='/'>Home</LinkItem>
        <LinkItem url='/categories'>Categories</LinkItem>
        <LinkItem url='/blog'>Blog Posts</LinkItem>
        <LinkItem url='/styles'>Styles</LinkItem>
        <LinkItem url='/about'>About</LinkItem>
        <LinkItem url='/contact'>Contact</LinkItem>
    </StyledUl>);
}