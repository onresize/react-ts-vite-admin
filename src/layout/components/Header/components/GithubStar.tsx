import React from "react";

const styles = {
	githubLogo: {
		margin: `2px 22px 0 0`
	}
};

function GithubStar() {
	return (
		<>
			<img
				style={styles.githubLogo}
				src="https://img.shields.io/github/stars/onresize/react-ts-vite-admin?color=white&label=Stars&logo=github&style=social"
				alt=""
			/>
		</>
	);
}

export default GithubStar;
