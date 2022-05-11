import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AuthContext } from "../GlobalState/AuthProvider";
import { remove, add, reset } from "../GlobalState/StateManagement";

const MyTest = () => {
	const dispatch = useDispatch();
	const viewCount = useSelector((state) => state.stateReducer.count);
	const {
		count,
		// remove, add
	} = useContext(AuthContext);
	return (
		<Container>
			<Wrapper>The Test</Wrapper>
			<Holder>
				<DIv>
					<br />
					<br />
					<Result>For Redux</Result>
					<Result>{viewCount}</Result>
					<br />
					<br />
					<But>
						<Button
							onClick={() => {
								dispatch(remove());
							}}
						>
							-
						</Button>
						<Button
							onClick={() => {
								dispatch(reset());
							}}
						>
							reset
						</Button>
						<Button
							onClick={() => {
								dispatch(add());
							}}
						>
							+
						</Button>
					</But>
				</DIv>

				<DIv>
					<br />
					<br />
					<Result>For ContextAPI</Result>
					<Result>{count}</Result>
					<br />
					<br />
					<But>
						{/* <Button onClick={remove}>-</Button>
						<Button onClick={add}>+</Button> */}
					</But>
				</DIv>
			</Holder>
		</Container>
	);
};

export default MyTest;

const Holder = styled.div`
	display: flex;
`;

const Result = styled.div`
	font-weight: bold;
	font-size: 25px;
`;

const Button = styled.div`
	margin: 0 10px;
	background-color: #004080;
	width: 100px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 45px;
	border-radius: 3px;
	transform: scale(1);
	transition: all 350ms;

	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;

const But = styled.div`
	display: flex;
`;
const DIv = styled.div`
	width: 300px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Wrapper = styled.div``;
const Container = styled.div`
	padding-top: 100px;
	margin-left: 50px;
	width: 100%;
`;
