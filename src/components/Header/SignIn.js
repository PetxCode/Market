import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import pix from "./pix.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
	const navigate = useNavigate();
	const [uiImage, setUiImage] = useState(pix);
	const [avatar, setAvatar] = useState("");

	const modelSchema = yup.object().shape({
		email: yup.string().email().required("Please fill up this field"),
		password: yup.string().required("Please fill up this field"),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(modelSchema),
	});

	const onHandleSubmit = handleSubmit(async (data) => {
		const { email, password } = data;
		const url = `http://localhost:4444/api/user/signin`;

		const res = await axios.post(url, { email, password });
		if (res) {
			localStorage.setItem("user", JSON.stringify(res.data.data));
		}
		reset();
		navigate("/usercontents");
	});

	return (
		<Container>
			<Wrapper>
				<Card onSubmit={onHandleSubmit}>
					<Holder>
						<Hold>
							<DivError>{errors.email && errors?.email.message}</DivError>
							<TextInput placeholder="email" {...register("email")} />
						</Hold>

						<Hold>
							<DivError>{errors.password && errors?.password.message}</DivError>
							<TextInput placeholder="password" {...register("password")} />
						</Hold>
					</Holder>

					<Holder>
						<Button type="submit">Sign in</Button>
					</Holder>

					<Account>
						Don't have an Accout? <Div to="/">Go Back Home</Div>
					</Account>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default SignIn;

const Hold = styled.div`
	width: 100%;
`;
const DivError = styled.p`
	margin: 0px;
	color: red;
	font-size: 12px;
	margin-top: 12px;
`;

const Account = styled.div`
	text-align: center;
	margin-top: 20px;
`;
const Div = styled(Link)`
	font-weight: bold;
	color: black;
	text-decoration: none;
`;

const Button = styled.button`
	justify-content: center;
	align-items: center;
	display: flex;
	width: 100%;
	background-color: red;
	height: 50px;
	outline: none;
	border: 0;
	color: white;
	font-size: 25px;
	font-weight: bold;
	text-transform: uppercase;

	transform: scale(1);
	transition: all 350ms;

	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;

const TextInput = styled.input`
	width: 100%;
	height: 45px;
	border-radius: 5px;
	border: 1px solid silver;
	outline: none;
	font-size: 16px;
	padding-left: 10px;

	::placeholder {
		font-family: Poppins;
	}
`;

const Holder = styled.div`
	width: 80%;
	margin-top: 40px;
	padding: 0 10px;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-direction: column;
`;

const ImageInput = styled.input`
	display: none;
`;

const ImageLabel = styled.label`
	background-color: red;
	padding: 15px 30px;
	border-radius: 5px;
	color: white;
	transform: scale(1);
	transition: all 350ms;

	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;

const Image = styled.img`
	width: 120px;
	height: 120px;
	border-radius: 50%;
	object-fit: cover;
	background-color: red;
	margin-bottom: 30px;
`;

const Card = styled.form`
	width: 500px;
	min-height: 350px;
	height: 100%;
	background-color: white;
	border-radius: 10px;
	padding: 30px 0;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	padding-top: 150px;
	min-height: calc(100vh - 100px);
	height: 100%;
	background-color: lightgrey;
`;
