import React from "react";
import styled from "styled-components";

const Header = ({ bc }) => {
	return (
		<Container bc={bc}>
			<Wrapper>
				<Logo>
					<Text>AJ MarketPalce</Text>
					<Dot />
				</Logo>

				<Navigation>
					<Nav>Becoma a Seller</Nav>
					<Nav>Sign in</Nav>
					<Nav1 bc={bc}>Join</Nav1>
				</Navigation>
			</Wrapper>
		</Container>
	);
};

export default Header;

const Text = styled.div`
	font-size: 30px;
	font-weight: bold;
	margin-left: 15px;
`;

const Dot = styled.div`
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: #004080;
	margin-bottom: 10px;
	margin-left: 5px;
`;

const Nav1 = styled.div`
	margin: 0 10px;
	font-weight: bold;
	font-size: 20px;
	transition: all 350ms;
	transform: scale(1);

	padding: 10px 25px;
	border: 1px solid;
	border-radius: 3px;
	border-color: ${({ bc }) => (bc ? "silver" : "green")};
	/* color: ${({ bc }) => (bc ? "white" : "black")}; */
	color: ${({ bc }) => (bc ? "silver" : "green")};

	:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
`;

const Nav = styled.div`
	margin: 0 10px;
	font-weight: bold;
	font-size: 20px;
	transition: all 350ms;
	transform: scale(1);

	padding: 10px 15px;

	:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
`;

const Navigation = styled.div`
	height: 100px;
	display: flex;
	align-items: center;
	margin-right: 20px;
`;

const Logo = styled.div`
	display: flex;
	width: 350px;
	justify-content: flex-start;
	align-items: flex-end;
	transition: all 350ms;
	transform: scale(1);

	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
`;

const Container = styled.div`
	width: 100%;
	height: 100px;
	/* border-bottom: 1px solid silver; */
	background-color: ${({ bc }) => (bc ? "#004080" : "transperant")};
	color: ${({ bc }) => (bc ? "white" : "black")};
	position: fixed;
`;
