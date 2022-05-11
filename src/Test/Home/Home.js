import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

// #ac3f5b #8b2604 #b44461 #00431a

const Home = () => {
	// const dot = useRef();
	// const dot1 = useRef();
	// const dot2 = useRef();
	// const dot3 = useRef();

	// const dotColor = ["#ac3f5b", "", "", ""];
	// const dotColor1 = ["", "red", "", ""];
	// const dotColor2 = ["", "", "yellow", ""];
	// const dotColor3 = ["", "", "", "#00431a"];

	const sliderChange = [
		{
			id: 1,
			title: "A Machanic",
			image: require("../assets/2.png"),
			star: 2,
		},
		{
			id: 2,
			title: "A ShoeMaker",
			image: require("../assets/2.png"),
			star: 3,
		},
		{
			id: 3,
			title: "A Fashion Designer",
			image: require("../assets/2.png"),
			star: 1,
		},
		{
			id: 3,
			title: "A Game Designer",
			image: require("../assets/2.png"),
			star: 1,
		},
	];

	const [count, setCount] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setCount((el) => el + 1);
		}, 3000);
	}, []);

	// useEffect(() => {
	// 	dot.current.style.backgroundColor = dotColor[count % dotColor.length];
	// 	dot.current.style.transition = "all 350ms";

	// 	dot1.current.style.backgroundColor = dotColor1[count % dotColor1.length];
	// 	dot1.current.style.transition = "all 350ms";

	// 	dot2.current.style.backgroundColor = dotColor2[count % dotColor2.length];
	// 	dot2.current.style.transition = "all 350ms";

	// 	dot3.current.style.backgroundColor = dotColor3[count % dotColor3.length];
	// 	dot3.current.style.transition = "all 350ms";
	// }, [count]);

	return (
		<Container>
			<Wrapper>
				<Hero>
					<Search>
						<Text>Find the perfect content for your Business</Text>
						<Holder>
							<Icon />
							<Input placeholder='try "building mobile app"' />
						</Holder>
					</Search>
					<ImageHolder>
						<TextDiv>
							<Text1>{sliderChange[count % sliderChange.length].title}</Text1>
							<Text2>{sliderChange[count % sliderChange.length].star}</Text2>
						</TextDiv>
						<Image src={sliderChange[count % sliderChange.length].image} />
					</ImageHolder>
				</Hero>
				<Bg />
			</Wrapper>
		</Container>
	);
};

export default Home;

const TextDiv = styled.div`
	position: relative;
	bottom: 50px;
	z-index: 11;
	color: white;
`;

const Hero = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Bg = styled.div`
	background-color: #ac3f5b;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
`;

const Text2 = styled.div`
	bottom: 60px;
	right: 20px;
	font-size: 16px;
	color: black;
`;

const Text1 = styled.div`
	bottom: 20px;
	right: 20px;
	color: black;
`;

const Image = styled.img`
	width: 550px;
	height: 90%;
	object-fit: contain;
	background-color: green;
	position: relative;
	bottom: 0;
	margin-top: 100px;
`;

const ImageHolder = styled.div`
	height: 100%;
	z-index: 10;
	display: flex;
	flex-direction: column-reverse;
`;

const Input = styled.input`
	width: 100%;
	height: 100%;
	outline: none;
	border: 0;
	font-size: 17px;

	::placeholder {
		font-family: Poppins;
	}
`;

const Icon = styled(BsSearch)`
	color: gray;
	margin: 0 10px;
	font-size: 25px;
`;

const Holder = styled.div`
	width: 400px;
	height: 50px;
	background-color: white;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	overflow: hidden;
	display: flex;
	align-items: center;
`;

const Text = styled.div``;

const Search = styled.div`
	margin-left: 20px;
	z-index: 10;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: row-reverse;
	position: relative;
`;

const Div = styled.div`
	margin-top: 100px;
	display: flex;
`;

const Dot = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: white;
	margin: 0 5px;
`;

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 100px);
	/* background-color: #004080; */
	padding-top: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	color: white;
	flex-direction: column;
`;
{
	/* <Div>
				<Dot ref={dot} />
				<Dot ref={dot1} />
				<Dot ref={dot2} />
				<Dot ref={dot3} />
			</Div> */
}
