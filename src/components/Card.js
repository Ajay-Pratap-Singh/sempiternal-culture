import React from 'react';
import styled from 'styled-components'
import Link from './Link'

const StyledCard = styled.article`
    display: flex;
    flex-flow: column nowrap;
    padding: 3.2rem 2.8rem 4rem;
    background-color: #FFFFFF;
    max-width:30vw;
    ${Link}{
        color: rgba(0, 0, 0, 1);
    }
    ${Link}:hover{
        color:#33998a;
    }
`

const Heading = styled.h3`
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
    font-size:2.6rem;
    line-height: 1.231;
    margin-top: 0;
    margin-bottom: 0.8rem;
`
const BlogMeta = styled.div`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    font-size: 11.5px;
    line-height: 2rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-bottom: 3.2rem;
`

const Content = styled.p`
    font-size: 1.7rem;
    line-height: 1.882;
    color: rgba(0, 0, 0, 0.5);
`

function Thumbnail(props){
    return(
        <Link to={props.blogURL} style={{margin:"-3.2rem -2.8rem 0rem"}}>
            <img src={props.imgSrc} style={{width:"100%"}} alt="Blog"/>
        </Link>
    )
}

export default function Card(props){
    return (<StyledCard>
       {props.imgSrc?<Thumbnail blogURL={props.blogURL} imgSrc={props.imgSrc}/>:null}
        <Heading>
            <Link to={props.blogURL}>{props.title}</Link>
        </Heading>
        <BlogMeta>
            <span style={{marginRight:"2rem"}}>
                <Link to={"#"}>DESIGN</Link>,
                <Link to={"#"}>PHOTOGRAPHY</Link>
            </span>
            <span>
                {props.date}
            </span>
            <br/>
            {props.author?<span style={{marginRight:"2rem"}}>
                <Link to={"#"}>{props.author}</Link>
            </span>:null}
        </BlogMeta>
        <Content>
            {props.children}
        </Content>
    </StyledCard>);
}