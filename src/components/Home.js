import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const Container = styled.div`
    padding:2rem;
`

export default function Home(){
    return(
        <Container>
            <Card 
                title="Just a Standard Format Post." 
                date="APR 29, 2019" 
                imgSrc="https://res.cloudinary.com/ajay-pratap-singh/image/upload/v1596702184/sempiternal-culture/woodcraft-1200_pokfdp.jpg"
                blogURL="/#"
            >
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
            </Card>
        </Container>
    );
}