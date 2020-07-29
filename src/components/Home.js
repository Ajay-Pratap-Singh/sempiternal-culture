import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const Container = styled.div`
    padding:2rem;
`

export default function Home(){
    return(
        <Container>
            <Card title="Card Title">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
            </Card>
        </Container>
    );
}