import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ServiceSlider() {
	const [allData, setAllData] = useState([]);
	const viewContents = async () => {
		const url = "http://localhost:4444/api/content/allContent";
		const res = await axios.get(url);

		if (res) {
			setAllData(res.data.data);
		}
	};

	useEffect(() => {
		viewContents();
	}, []);

	return (
		<Wall>
			<Title>Popular Professional Service</Title>
			<Container>
				{allData?.map((props) => (
					<Wrapper to={"/card"} key={props._id} bg={props.image}>
						<Span>{props.description}</Span>
						<Span2>{props.title}</Span2>
					</Wrapper>
				))}
			</Container>
		</Wall>
	);
}

const Span2 = styled.div`
	font-size: 1.7rem;
`;
const Span = styled.div``;
const Title = styled.div`
	font-size: 2.4rem;
	margin: 20px;
`;
const Container = styled.div`
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 90%;
`;
const Wrapper = styled(Link)`
	text-decoration: none;
	margin: 10px;
	width: 180px;
	height: 280px;
	background-image: url(${({ bg }) => bg});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 6px;
	color: #fff;
	padding: 20px;
	font-weight: 600;
	transition: all 350ms;

	:hover {
		cursor: pointer;
		opacity: 0.9;
	}
`;
const Wall = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
