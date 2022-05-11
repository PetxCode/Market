import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyTest from "./Build/TestBuild/MyTest";
import Header from "./components/Header/Header";
import SignIn from "./components/Header/SignIn";
import SignUp from "./components/Header/SignUp";
import SignUpSeller from "./components/Header/SignUpSeller";
import Home from "./components/Home/Home";
import ContentDetail from "./components/Services/ContentDetail";
import Market from "./components/Services/Market";
import User from "./components/User/User";
import UserContent from "./components/User/UserContent";
import UserDashboard from "./components/User/UserDashboard";
import PrivatePage from "./GlobalState/PrivatePage";

const App = () => {
	const [scroll, setScroll] = useState(false);

	const getScroll = () => {
		const check = window.scrollY;
		if (check >= 100) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	window.addEventListener("scroll", getScroll);

	return (
		<BrowserRouter>
			<Header
			// bc={scroll ? "bc" : ""}
			/>
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/dashboard"} element={<UserDashboard />} />
				<Route path={"/card"} element={<Market />} />
				<Route path={"/signup"} element={<SignUp />} />
				<Route path={"/signin"} element={<SignIn />} />
				<Route path={"/signupseller"} element={<SignUpSeller />} />
				<Route path={"/detail"} element={<ContentDetail />} />
				<Route path={"/test"} element={<MyTest />} />
				<Route path={"/user"} element={<User />} />
				<Route path={"/usercontents"} element={<UserContent />} />
				{/* {currentUser ? (
					<Route path={"/usercontents"} element={<UserContent />} />
				) : null} */}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
