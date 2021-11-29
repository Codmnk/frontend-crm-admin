import React from "react";
import { BtnPrimary } from "../../components/custom-button/BtnPrimary";
import { CustomInput } from "../../components/custom-input/CustomInput";

const Login = () => {
	const inputFields = [
		{ label: "Email", type: "text", name: "email" },
		{ label: "Password", type: "password", name: "password" },
	];

	return (
		<div className="login-page">
			<div className="login-form">
				<h3>Login In</h3>
				<hr />
				<div className="input-fields">
					<form>
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
