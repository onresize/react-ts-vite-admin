module.exports = {
	"*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
	"package.json": ["prettier --write"],
	"*.{scss,less}": ["stylelint --fix", "prettier --write"],
	"*.md": ["prettier --write"]
};