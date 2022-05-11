import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Market() {
  return (
    <Wall>
      <Up>
        <Title>Ajegunle Cpopywrite Content</Title>
        <Span>Do social media better than the rest with custom-designed skins, avatars & more</Span>
        <Topper>
          <Available>2,025 services available</Available>
          <Sort>Sort bt Highest Price</Sort>
        </Topper>
      </Up>
      <Container>
          <Card to={'/detail'}>
            <Img src='/assets/s3.jpg'/>
            <Border>
              <Under>
                <Img2 src='/assets/s3.jpg'/>
                <Info>
                  <Name>Sanchil</Name>
                  <Level>Level 2 Seller</Level>
                </Info>
              </Under>
              <Writeup>I will design engaging facebook ads</Writeup>
              <Rating>
                <Star></Star>
                <Count>4.9(1k+)</Count>
              </Rating>
              <Fav>
                <Icon></Icon>
                <Price>Starting At: US$15</Price>
              </Fav>
            </Border>
          </Card>
          <Card to={'/detail'}>
            <Img src='/assets/s3.jpg'/>
            <Border>
              <Under>
                <Img2 src='/assets/s3.jpg'/>
                <Info>
                  <Name>Sanchil</Name>
                  <Level>Level 2 Seller</Level>
                </Info>
              </Under>
              <Writeup>I will design engaging facebook ads</Writeup>
              <Rating>
                <Star></Star>
                <Count>4.9(1k+)</Count>
              </Rating>
              <Fav>
                <Icon></Icon>
                <Price>Starting At: US$15</Price>
              </Fav>
            </Border>
          </Card>
          <Card to={'/detail'}>
            <Img src='/assets/s3.jpg'/>
            <Border>
              <Under>
                <Img2 src='/assets/s3.jpg'/>
                <Info>
                  <Name>Sanchil</Name>
                  <Level>Level 2 Seller</Level>
                </Info>
              </Under>
              <Writeup>I will design engaging facebook ads</Writeup>
              <Rating>
                <Star></Star>
                <Count>4.9(1k+)</Count>
              </Rating>
              <Fav>
                <Icon></Icon>
                <Price>Starting At: US$15</Price>
              </Fav>
            </Border>
          </Card>
          <Card to={'/detail'}>
            <Img src='/assets/s3.jpg'/>
            <Border>
              <Under>
                <Img2 src='/assets/s3.jpg'/>
                <Info>
                  <Name>Sanchil</Name>
                  <Level>Level 2 Seller</Level>
                </Info>
              </Under>
              <Writeup>I will design engaging facebook ads</Writeup>
              <Rating>
                <Star></Star>
                <Count>4.9(1k+)</Count>
              </Rating>
              <Fav>
                <Icon></Icon>
                <Price>Starting At: US$15</Price>
              </Fav>
            </Border>
          </Card>
      </Container>
    </Wall>
  )
}

const Wall = styled.div`
padding-top: 60px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`;
const Up = styled.div`
width: 95%;
`;
const Container = styled.div`
width: 95%;
margin-top: 20px;
display: flex;
justify-content: space-between;
`;
const Card = styled(Link)`
text-decoration: none;
width: 320px;
height: 350px;
transform: scale(1);
transition: all 300ms;

:hover{
  cursor: pointer;
  transform: scale(0.95);
}
`;
const Fav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 1.5px solid grey;
padding: 10px;
`;
const Price = styled.div`

`;
const Icon = styled.div`
width: 20px;
height: 20px;
background-color: cyan;
`;
const Rating = styled.div`
margin: 10px;
`;
const Star = styled.div`

`;
const Count = styled.div`

`;
const Writeup = styled.div`
margin: 10px;
`;
const Border = styled.div`
box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
margin-top: -8px;
`;
const Under = styled.div`
display: flex;
width: 150px;
justify-content: space-between;
align-items: center;
margin: 10px;
`;
const Info = styled.div`

`;
const Level = styled.div`

`;
const Img = styled.img`
width: 100%;
height: 50%;
object-fit: cover;
`;
const Img2 = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`;
const Title = styled.h2`
font-size: 1.8rem;
`;
const Span = styled.div`
margin-top: -20px;
`;
const Topper = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-top: 20px;
`;
const Available = styled.div`

`;
const Sort = styled.div`

`;
const Name = styled.div`

`;