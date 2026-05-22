const { execFileSync } = require("child_process");
const path = require("path")
function getGitLogs() {
    try {
        const root = execFileSync(
            "git",
            ["rev-parse", "--show-toplevel"],
            {
                encoding: "utf8"
            }
        ).trim();
        const data = execFileSync(
            "git",
            [
                "log",
                "--pretty=format:%ad|%an|%s",
                "--date=short"
            ],
            {
                encoding: "utf8"
            }
        );
        const repoName = path.basename(root)
        const commits =  data
            .split("\n")
            .filter(Boolean)
            .map(line => {
                const [date, author, message] = line.split("|");

                return {
                    date,
                    author,
                    message
                };
            });
            return {commits,repoName}

    } catch (error) {
        console.log("❌ Not inside a Git repository");
        process.exit(1);
    }
}

module.exports = getGitLogs;