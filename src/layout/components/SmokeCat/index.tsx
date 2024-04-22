import React from "react";
import { useLocation } from "react-router-dom";
import smoke from "@/assets/images/no-smoke.png";
import "./index.less";

function SmokeCat() {
	const { pathname } = useLocation();

	return (
		<>
			{pathname.includes("home") && (
				<div>
					<img src={smoke} alt="" className="smoke-cat" />
					<div className="smoke-cigar"></div>
				</div>
			)}
		</>
	);
}

export default SmokeCat;
