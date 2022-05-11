import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export default function ContentDetail() {
	return (
		<Container>
			<Wrapper>
				<Title>I will design top notch social media content</Title>
				<Tile>
					<Av src="/assets/s4.jpg" />
					<Name>fernandobengua</Name>
					<Levels>Level 2 Seller</Levels>
					<Rating>
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<Count>4.9(74)</Count>
					</Rating>
				</Tile>
				<Gallery>
					<Img src="/assets/s3.jpg" />
					<Bt>
						<Subimage src="/assets/s1.jpg" />
						<Subimage src="/assets/s2.jpg" />
						<Subimage src="/assets/s3.jpg" />
						<Subimage src="/assets/s4.jpg" />
						<Subimage src="/assets/s3.jpg" />
						<Subimage src="/assets/s2.jpg" />
						<Subimage src="/assets/s1.jpg" />
					</Bt>
				</Gallery>
				<Sub>About This Gig</Sub>
				<Info>
					First impressions last. Brands need to go much further than their
					visual identity. How your brand looks and feels is essential for
					creating a good first impression, especially on social media. Your
					social profile is a very important part of your brand, and with the
					right design, you can attract the right type of customers, look
					professional, and beat your competition! My design skills can really
					help to set your business above everyone else.
				</Info>
				<Sub>About The Seller</Sub>
				<Seller>
					<Ava2>
						<SellerImg src="/assets/s1.jpg" />
						<Level>
							<span>Level Two</span>
						</Level>
					</Ava2>
					<Detail>
						<Name>fernandobengua</Name>
						<Level2>Branding and Social Media Expert</Level2>
						<Rating>
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<Count>4.9(74)</Count>
						</Rating>
						<Button>Contact me</Button>
					</Detail>
				</Seller>
				<Frame>
					<Holder>
						<Top>
							<Where>Country</Where>
							<Where>Spain</Where>
						</Top>
						<Top>
							<Where>Occupation</Where>
							<Where>Lawyer</Where>
						</Top>
						<Top>
							<Where>Gender</Where>
							<Where>Female</Where>
						</Top>
					</Holder>
					<Bottom>
						Hello, my name is Fernando. I am an Art and Creative Director from
						Brazil with a background in Design and the Arts. With more than 15
						years of experience, I have worked in advertising, visual identity,
						branding, campaign direction and social media content with some
						prominent international fashion and lifestyle brands from around
						world. Globetrotter and curious by nature, I'm currently living in
						the Spanish capital, Madrid
					</Bottom>
				</Frame>
			</Wrapper>
			<Second></Second>
		</Container>
	);
}

const Levels = styled.p``;
const Av = styled.img`
	width: 40px;
	height: 40px;
	object-fit: cover;
	border-radius: 50%;
`;
const Subimage = styled.img`
	width: 100px;
	height: 80px;
	object-fit: cover;
`;
const Second = styled.div`
	width: 450px;
	height: 700px;
	background-color: green;
	margin-right: 40px;
	margin-top: 150px;
`;
const Container = styled.div`
	padding-top: 60px;
	display: flex;
	justify-content: space-between;
	width: 100%;
	min-height: calc(100vh - 80px);
	margin-bottom: 20px;
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 55%;
	margin-left: 40px;
`;
const Title = styled.h2`
	font-size: 1.8rem;
`;
const Tile = styled.div`
	display: flex;
	width: 75%;
	justify-content: space-between;
	align-items: center;
	margin-top: -20px;
`;
const Gallery = styled.div`
	width: 100%;
	height: 450px;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
const Bt = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;
const Seller = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 400px;
`;
const Info = styled.p`
	margin-top: -10px;
`;

const Ava2 = styled.div`
	display: flex;
	width: 110px;
	align-items: flex-end;
	position: relative;
`;
const Img = styled.img`
	width: 100%;
	height: 80%;
	object-fit: cover;
`;
const SellerImg = styled.img`
	width: 110px;
	height: 110px;
	object-fit: cover;
	border-radius: 50%;
`;
const Sub = styled.h2`
	margin-top: 20px;
	font-size: 1.2rem;
`;
const Detail = styled.div``;
const Level2 = styled.div``;
const Name = styled.div``;
const Level = styled.div`
	background-color: #9d1fdf;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	position: absolute;
	right: 0px;
	span {
		font-size: 0.5rem;
	}
`;
const Rating = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 160px;
`;
const Count = styled.div``;
const Button = styled.button`
	width: 150px;
	height: 40px;
	outline: none;
	border: solid 1.5px orange;
	background-color: transparent;
	font-size: 1rem;
	font-weight: 600;
`;
const Frame = styled.div`
	margin-top: 20px;
`;
const Holder = styled.div`
	display: flex;
	justify-content: space-between;
	width: 400px;
`;
const Top = styled.div``;
const Where = styled.div``;
const Bottom = styled.div`
	margin-top: 20px;
`;
