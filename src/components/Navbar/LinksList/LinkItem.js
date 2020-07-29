import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const StyledLink= styled(NavLink).attrs({exact:true})`
    text-decoration:none;
    color: rgba(255, 255, 255, 0.6);
    line-height:2.9rem;
    transition: all 0.3s ease-in-out;
    &:hover,
    &.active {
        color: rgba(255, 255, 255, 1) 
    }
  }
`

export default function LinkItem(props){
    return (<li>
        <StyledLink to={props.url}>{props.children}</StyledLink>
    </li>);
}