import React from 'react';
import styled from 'styled-components'
import Link from './Link'

const StyledCard = styled.article`
    display: flex;
    flex-flow: column nowrap;
    background-color: #FFFFFF;
    max-width:20vw;
`
const Heading = styled.h3`
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
    ${Link}{
        color: rgba(0, 0, 0, 1);

    }
`

const Content = styled.p`
    font-size: 1.7rem;
    line-height: 1.882;
    color: rgba(0, 0, 0, 0.5);
`

export default function Card(props){
    return (<StyledCard>
       {props.imgSrc?<Link to={"/blog"}>
            <img src={props.imgSrc} alt="Blog"/>
        </Link>:null}
        <Heading>
            <Link to={"/blog"}>{props.title}</Link>
        </Heading>
        <Content>
            {props.children}
        </Content>
    </StyledCard>);
}