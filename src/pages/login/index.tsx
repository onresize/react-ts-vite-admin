import React, { useContext, useEffect } from "react";
import { ThemeContext } from "@/styles/theme/cssinJs";
import { Button } from "antd";
import VanillaTilt from "vanilla-tilt";
import LoginForm from "./components/LoginForm";
import SwitchDark from "@/components/SwitchDark";
import loginLeft from "@/assets/images/login_left4.png";
import logo from "@/assets/images/logo.png";
import pic from "@/assets/images/pic.png";
import WavesSvg from "@/assets/images/waves.svg";
import styles from "./index.module.less";

const Login = (_props: any) => {
	const themeStyle: any = useContext(ThemeContext);
	useEffect(() => {
		const VanillaTiltDOM = document.getElementById("hoverDom") as HTMLElement;
		VanillaTilt.init(VanillaTiltDOM);
	}, []);

	return (
		<div
			className={styles.loginContainer}
			style={{
				background: themeStyle.bgColor
			}}
		>
			<SwitchDark />
			<div className={styles.loginBox}>
				<div className={styles.loginLeft}>
					<img src={loginLeft} alt="login" />
				</div>

				{/* 登录form */}
				<div>
					<section id="hoverDom" className={styles.homeShow}>
						<div
							className={styles.homeShowMain}
							style={{
								borderColor: "#fff"
							}}
						>
							<div className={styles.homeShowMainBack}>
								<div className={styles.homeShowTop}>
									<div className={styles.loginLogo}>
										<img className={styles.loginIcon} src={logo} alt="logo" />
										<span
											className={styles.logoText}
											style={{
												color: "rgba(255, 255, 255, 0.85)"
											}}
										>
											{import.meta.env.VITE_GLOB_APP_TITLE}
										</span>
									</div>
								</div>

								<div className={styles.homeShowLeft}></div>

								<div className={styles.homeShowMicroCon}>
									<div className={styles.homeShowMicro}>
										<LoginForm />
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

			<img src={WavesSvg} alt="waves" className={styles.waves} />
		</div>
	);
};

export default Login;
