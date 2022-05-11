import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ServiceSlider from "../Services/ServiceSlider";

export default function Home() {
	const slider = [
		{
			id: 1,
			title: "Find the perfect freelance services for your business",
			author: "Dev Lulu, Frontend Engineer",
			image: "/assets/s1.jpg",
		},
		{
			id: 2,
			title: "Aj Market place is under construction",
			author: "Dev Preshi, Backend Engineer",
			image: "/assets/s2.jpg",
		},
		{
			id: 3,
			title: "The first market place in the whole Ajegunle",
			author: "Dev Blessing, Snr Engineer",
			image: "/assets/s3.jpg",
		},
		{
			id: 4,
			title: "Buy and sell at ease we are always there for you to earn",
			author: "Dev Cythia, Project Manager",
			image: "/assets/s4.jpg",
		},
	];

	const [count, setCount] = useState(0);

	const addCount = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setInterval(() => {
			setCount((el) => el + 1);
		}, 3000);
	}, []);

	return (
		<>
			<Container>
				<Background>
					<img src={slider[count % slider.length].image} alt="" />
				</Background>
				<Content>
					<Tag>
						<Info>{slider[count % slider.length].title}</Info>
						<Border>
							<Span>Design</Span>
							<Span>Thinkng</Span>
							<Span>CodeLab</Span>
							<Span>Germent</Span>
						</Border>
					</Tag>
					<Details>
						<Author>{slider[count % slider.length].author}</Author>
					</Details>
				</Content>
			</Container>
			<ServiceSlider />
		</>
	);
}

const Container = styled.div`
	color: #fff;
	padding-top: 60px;
	display: flex;
	justify-content: center;
	width: 100%;
	height: calc(100vh - 60px);
	flex-direction: column;
	position: relative;
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
`;
const Background = styled.div`
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	position: absolute;
	z-index: -1;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
const Tag = styled.div`
	margin: 10px;
	margin-top: 150px;
`;
const Author = styled.div``;
const Span = styled.span`
	border: 2px solid #fff;
	border-radius: 15px;
	padding: 6px;
`;
const Info = styled.h2`
	font-size: 3rem;
	width: 650px;
`;
const Details = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 10px;
`;
const Border = styled.div`
	display: flex;
	width: 400px;
	justify-content: space-between;
	margin-top: -20px;
`;
