import md5 from "js-md5";
import { useState } from "react";
import { ConfigProvider, Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Login } from "@/api/interface";
import { loginApi } from "@/api/modules/login";
import { HOME_URL } from "@/config/config";
import { setToken } from "@/utils/authCookie";
import { useIntl } from "react-intl";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import "./index.less";

const LoginForm = (_props: any) => {
	const { formatMessage: t } = useIntl();
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const [loading, setLoading] = useState<boolean>(false);

	const initFormValue = {
		username: "admin",
		password: "123456",
		remember: true
	};

	// 登录
	const onFinish = async (loginForm: Login.ReqLoginForm) => {
		try {
			setLoading(true);
			loginForm.password = md5(loginForm.password);
			const { data } = await loginApi(loginForm);
			setToken(data?.access_token);
			message.success(t({ id: "header.loginSuccess" }));
			navigate(HOME_URL);
		} finally {
			setLoading(false);
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			<Form
				form={form}
				name="basic"
				labelCol={{ span: 5 }}
				initialValues={initFormValue}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				size="large"
				autoComplete="off"
			>
				<Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
					<Input className="custom-input" placeholder="用户名：admin / user" prefix={<UserOutlined />} />
				</Form.Item>
				<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
					<Input.Password className="custom-input" placeholder="密码：123456" prefix={<LockOutlined />} />
				</Form.Item>
				<Form.Item className="login-btn">
					<Button className="btn" onClick={() => form.resetFields()} icon={<CloseCircleOutlined />}>
						{t({ id: "login.reset" })}
					</Button>
					<Button className="btn" type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
						{t({ id: "login.confirm" })}
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default LoginForm;
