import React from "react";
import styled from "styled-components";
import Market from "../Services/Market";
import User from "./User";

export default function UserContent() {
	return (
		<Container>
			<Wrapper>
				<Profile>
					<User />
				</Profile>
				<Gigs>
					<Market />
				</Gigs>
			</Wrapper>
		</Container>
	);
}

const Container = styled.div``;
const Wrapper = styled.div``;
const Profile = styled.div``;
const Gigs = styled.div``;
