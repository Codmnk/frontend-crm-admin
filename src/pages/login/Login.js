import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BtnPrimary } from "../../components/custom-button/BtnPrimary";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { adminLogin } from "../profile/adminUserAction";
import { useNavigate } from "react-router-dom";

const initialState = {
	email: "a@a.com",
	password: "123456aaa",
};
const Login = () => {
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const [loginInfo, setLoginInfo] = useState(initialState);
	const { isLoading, isAuth } = useSelector(state => state.admin);

	useEffect(() => {
		isAuth && navigate("/dashboard");
	}, [isAuth, navigate]);

	const handleChange = e => {
		const { name, value } = e.target;
		setLoginInfo({ ...loginInfo, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(adminLogin(loginInfo));
	};

	const inputFields = [
		{
			label: "Email",
			type: "text",
			name: "email",
			value: loginInfo.email,
			onChange: handleChange,
			required: true,
		},
		{
			label: "Password",
			type: "password",
			name: "password",
			value: loginInfo.password,
			onChange: handleChange,
			required: true,
		},
	];

	return (
		<div className="login-page">
			<div className="login-form">
				<h3>Login In</h3>
				<hr />
				<div className="input-fields">
					{isLoading && "Loading ..."}

					<form onSubmit={handleSubmit}>
						{inputFields.map((row, i) => (
							<CustomInput key={i} {...row} />
						))}
						<div className="form-bottom">
							<BtnPrimary text="Login" />
						</div>
						<div className="text-end">
							New here? <a href="/register">Register</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
