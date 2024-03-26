import React, { useContext } from "react";
import { ThemeContext } from "@/styles/theme/cssinJs";
import { Button } from "antd";
import LoginForm from "./components/LoginForm";
import SwitchDark from "@/components/SwitchDark";
import loginLeft from "@/assets/images/login_left.png";
import logo from "@/assets/images/logo.png";
import "./index.less";

const Login = (_props: any) => {
	const themeStyle: any = useContext(ThemeContext);

	return (
		<div
			className="login-container"
			style={{
				background: themeStyle.bgColor
			}}
		>
			<SwitchDark />
			<div className="login-box">
				<div className="login-left">
					<img src={loginLeft} alt="login" />
				</div>
				<div
					className="login-form"
					style={{
						borderColor: themeStyle.borderColor
					}}
				>
					<div className="login-logo">
						<img className="login-icon" src={logo} alt="logo" />
						<span
							className="logo-text"
							style={{
								color: themeStyle.fontColor
							}}
						>
							{import.meta.env.VITE_GLOB_APP_TITLE}
						</span>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
