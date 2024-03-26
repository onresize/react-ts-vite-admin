import Fontmin from "fontmin";
import path from "path";

const inputFile = path.resolve(__dirname, "../assets/fonts-input/QT.ttf");
const outputDir = path.resolve(__dirname, "../assets/fonts-thin");

const editFont = (extractText: string = "") => {
	if (!extractText) return;
	// console.log('获取需要压缩的字体文本：', extractText);
	return new Promise((res, rej) => {
		const fontmin = new Fontmin()
			.src(inputFile)
			.use(
				Fontmin.glyph({
					text: extractText,
					hinting: false // keep ttf hint info (fpgm, prep, cvt). default = true
				})
			)
			.dest(outputDir);

		fontmin.run((err, files) => {
			if (err) {
				rej(err);
			} else {
				res(files);
			}
		});
	});
};

export const transFontFile = (extractTextArr: string[] = []) => {
	if (!extractTextArr?.length) return;
	extractTextArr.forEach(text => {
		editFont(text);
	});
};
