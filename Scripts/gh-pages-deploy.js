/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs").promises;
const path = require("path");

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");

    // 复制并重命名index.html
    const sourceFilePath = path.join(__dirname, folderName, "index.html");
    const destinationFilePath = path.join(__dirname, "public", "404.html");
    await fs.copyFile(sourceFilePath, destinationFilePath);

    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rimraf", [folderName]);
    await execa("git", ["checkout", "-f", "main"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();
