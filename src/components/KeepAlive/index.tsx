import { KeepAlive } from "react-activation";
import "./index.less";

const KeepAliveWrap = ({ children }: { children: any }) => {
	return (
		<div className="keepAlive-wrapper">
			<KeepAlive>{children}</KeepAlive>
		</div>
	);
};

export default KeepAliveWrap;
