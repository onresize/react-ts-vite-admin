import fs from "fs";
import chalk from "chalk";

fs.copyFileSync("buildBundle/index.html", "buildBundle/404.html");
console.log(chalk.green("copy successfully!"));
