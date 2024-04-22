import React, { useContext, useEffect } from "react";
import { ThemeContext } from "@/styles/theme/cssinJs";
import { Button } from "antd";
import VanillaTilt from "vanilla-tilt";
import useStore from "@/mobx/index";
import { observer } from "mobx-react-lite";
import LoginForm from "./components/LoginForm";
import SwitchDark from "@/components/SwitchDark";
import loginLeft from "@/assets/images/login_left4.png";
import logo from "@/assets/images/logo.png";
import pic from "@/assets/images/pic.png";
import WavesSvg from "@/assets/images/waves.svg";
import styles from "./index.module.less";

const Login = observer((_props: any) => {
	const themeStyle: any = useContext(ThemeContext);
	const { header } = useStore();

	useEffect(() => {
		if (!header.isMobileBool) {
			const VanillaTiltDOM = document.getElementById("hoverDom") as HTMLElement;
			VanillaTilt.init(VanillaTiltDOM);
		}
	}, [header.isMobileBool]);

	return (
		<>
			{/* pc端布局 */}
			{!header.isMobileBool && (
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
			)}

			{/* 移动端布局 */}
			{header.isMobileBool && (
				<div
					className={styles.loginContainer}
					style={{
						background: themeStyle.bgColor
					}}
				>
					<SwitchDark />
					<div
						style={{
							border: `1px solid ${themeStyle.borderColor}`,
							padding: "20px 30px 5px 30px",
							borderRadius: "10px",
							background: "rgba(0, 21, 41, 1)"
						}}
					>
						<div
							style={{
								color: "rgba(255, 255, 255, 0.85)",
								height: "3.5rem",
								fontFamily: "QT",
								fontSize: "2rem",
								fontWeight: "bold",
								whiteSpace: "nowrap",
								textAlign: "center"
							}}
						>
							{import.meta.env.VITE_GLOB_APP_TITLE}
						</div>
						<LoginForm />
					</div>
				</div>
			)}
		</>
	);
});

export default Login;
