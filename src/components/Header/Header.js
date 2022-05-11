import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SiCloud66 } from "react-icons/si";
import { AuthContext } from "../../GlobalState/AuthProvider";

export default function Header() {
	const { currentUser } = useContext(AuthContext);
	// console.log("Data: ", currentUser);
	return (
		<Container>
			<Wrapper>
				<Ava to="/">
					<SiCloud66 size={"2.5rem"} />
					<Span />
				</Ava>

				<Press>
					{currentUser ? (
						<div style={{ display: "flex" }}>
							<Name>{currentUser?.email}</Name>
						</div>
					) : null}
					{currentUser?.seller ? (
						<div style={{ display: "flex" }}>
							<Action to={"/dashboard"}>
								<Seller>User Dash-Board</Seller>
							</Action>{" "}
						</div>
					) : null}

					{currentUser && currentUser ? (
						<Action1
							onClick={() => {
								localStorage.removeItem("user");
							}}
						>
							<Seller>Sign Out</Seller>
						</Action1>
					) : (
						<div style={{ display: "flex" }}>
							<Action to={"/signupseller"}>
								<Seller>Become a seller</Seller>
							</Action>
							<Action to={"/signin"}>
								<Seller>Sign In</Seller>
							</Action>
							<Action to={"/signup"}>
								<Button>Join</Button>
							</Action>
						</div>
					)}
				</Press>
			</Wrapper>
		</Container>
	);
}

const Name = styled.div`
	font-size: 17px;
`;

const Container = styled.div`
	/* background-color: #e3e3e3; */
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	color: #fff;
	position: fixed;
	z-index: 1;
	color: red;
`;
const Wrapper = styled.div`
	width: 95%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Button = styled.button`
	color: #004080;
	width: 80px;
	height: 30px;
	background-color: transparent;
	font-size: 0.9rem;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: all 350ms;
	transform: scale(1);
	font-family: "poppins";
	border: 2px solid #004080;
	font-weight: 500;

	:hover {
		cursor: pointer;
		transform: scale(1.02);
		background-color: transparent;
	}
`;

const Seller = styled.button`
	color: #004080;
	height: 30px;
	background-color: transparent;
	font-size: 1rem;
	outline: none;
	border: none;
	transition: all 500ms;
	transform: scale(1);
	font-family: "poppins";
	font-weight: 500;

	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;
const Ava = styled(Link)`
	display: flex;
	align-items: flex-end;
	text-decoration: none;
	color: white;
`;
const Press = styled.div`
	/* width: 520px; */
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Span = styled.div`
	background-color: #1dbf73;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	color: #004080;
`;
const Action1 = styled.div`
	color: #004080;
`;
const Action = styled(Link)`
	color: #004080;
`;
