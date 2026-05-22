const getGitLogs = require("./git")

const showStats = ()=>{
    const {commits} = getGitLogs();
    const contributors = new Set(
        commits.map(commit=>commit.author)
    );
    const firstCommit = commits[commits.length-1];
    const latestCommit = commits[0];
    const formatDate = (date) =>
        new Date(date).toLocaleDateString(
            "en-IN",
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        );

    console.log(
        `Total Commits      : ${commits.length}`
    );

    console.log(
        `Total Contributors : ${contributors.size}`
    );

    console.log(
        `First Commit       : ${formatDate(firstCommit.date)}`
    );

    console.log(
        `Latest Commit      : ${formatDate(latestCommit.date)}`
    );
}
module.exports = showStats;