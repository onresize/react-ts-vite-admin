import React, { useEffect, useRef } from "react";

/**
 * 模拟vue中的nextTick
 * @param {function} callback
 */
export const useNextTick = (callback: any) => {
	const cbRef = callback;

	useEffect(() => {
		cbRef.current = callback;
	}, [callback]);

	useEffect(() => {
		const flush = callback.current();
		requestAnimationFrame(flush);
	}, []);
};
