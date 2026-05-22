const { execFileSync } = require("child_process");

function getGitLogs() {
    try {
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

        return data
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

    } catch (error) {
        console.error(error);
        return [];
    }
}

module.exports = getGitLogs;