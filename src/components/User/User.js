import React from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

export default function User() {
	return (
		<Container>
			<Wrapper>
				<Hold>
					<FaRegHeart />
					<Seller>
						<Ava2>
							<SellerImg src="/assets/s1.jpg" />
							<Level>
								<span>Level Two</span>
							</Level>
						</Ava2>
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
					</Seller>
					<Status>
						<Dot></Dot>
						<Online>Online</Online>
					</Status>
				</Hold>
				<Pab>
					<Info>
						<IoLocationOutline />
						<span>Spain</span>
					</Info>
				</Pab>
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	padding-top: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Wrapper = styled.div`
	box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
		rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;
const Hold = styled.div`
	display: flex;
	justify-content: space-between;
	width: 400px;
	margin: 10px;
`;
const Name = styled.div``;
const Level2 = styled.p`
	text-align: center;
	font-size: 0.8rem;
`;
const Count = styled.div``;
const Status = styled.div`
	border: solid 2px green;
	width: 70px;
	height: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 20px;
	padding: 5px;
	color: green;
`;
const Dot = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background-color: green;
`;
const Online = styled.div``;
const Info = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 70px;
`;
const Pab = styled.div`
	margin: 10px;
`;

const Seller = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-left: 80px;
`;

const Ava2 = styled.div`
	display: flex;
	width: 110px;
	align-items: flex-end;
	position: relative;
`;

const SellerImg = styled.img`
	width: 110px;
	height: 110px;
	object-fit: cover;
	border-radius: 50%;
`;

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
	margin-bottom: 10px;
`;
const Button = styled.button`
	width: 100%;
	height: 35px;
	outline: none;
	border: solid 1.5px orange;
	background-color: transparent;
	font-size: 1rem;
	font-weight: 600;
`;
