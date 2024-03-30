import React from "react";
import smoke from "@/assets/images/no-smoke.png";
import "./index.less";

function SmokeCat() {
	return (
		<>
			<img src={smoke} alt="" className="smoke-cat" />
			<div className="smoke-cigar"></div>
		</>
	);
}

export default SmokeCat;
