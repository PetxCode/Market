import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import pix from "./pix.jpg";
import axios from "axios";

const SignUp = () => {
	const [uiImage, setUiImage] = useState(pix);
	const [avatar, setAvatar] = useState("");

	const modelSchema = yup.object().shape({
		userName: yup.string().required("Please fill up this field"),
		email: yup.string().email().required("Please fill up this field"),
		password: yup.string().required("Please fill up this field"),
		confirm: yup
			.string()
			.oneOf([yup.ref("password"), null], "Password doesn't match"),
	});

	const uploadImage = (e) => {
		const file = e.target.files[0];
		const save = URL.createObjectURL(file);
		setUiImage(save);
		setAvatar(file);
	};

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(modelSchema),
	});

	const onHandleSubmit = handleSubmit(async (data) => {
		const { userName, email, password } = data;

		const formData = new FormData();

		formData.append("userName", userName);
		formData.append("email", email);
		formData.append("password", password);
		formData.append("avatar", avatar);

		const config = {
			headers: {
				"content-type": "multipart/form-data",
			},
		};

		const url = "http://localhost:4444/api/user/register";

		await axios.post(url, formData, config);

		reset();
	});

	return (
		<Container>
			<Wrapper>
				<Card onSubmit={onHandleSubmit}>
					<Image src={uiImage} />
					<ImageLabel htmlFor="pix">Upload Image</ImageLabel>
					<ImageInput type="file" onChange={uploadImage} id="pix" />

					<Holder>
						<Hold>
							<DivError>{errors.userName && errors?.userName.message}</DivError>
							<TextInput placeholder="userName" {...register("userName")} />
						</Hold>

						<Hold>
							<DivError>{errors.email && errors?.email.message}</DivError>
							<TextInput placeholder="email" {...register("email")} />
						</Hold>

						<Hold>
							<DivError>{errors.password && errors?.password.message}</DivError>
							<TextInput placeholder="password" {...register("password")} />
						</Hold>

						<Hold></Hold>

						<Hold>
							<DivError>{errors.confirm && errors?.confirm.message}</DivError>
							<TextInput placeholder="confirm" {...register("confirm")} />
						</Hold>
					</Holder>

					<Holder>
						<Button type="submit">Register</Button>
					</Holder>

					<Account>
						Already have an Accout? <Div to="/signin">Sign in here</Div>
					</Account>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default SignUp;

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
	min-height: 500px;
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
