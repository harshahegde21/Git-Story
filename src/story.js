const getGitLogs = require("./git");
const showTimeLine = require("./timeline");
const showContributors = require("./contributors");
const showStats = require("./stats");
const showStory = () => {
    const { commits, repoName } = getGitLogs();

    console.log(`📖 Git Story`);
    console.log("Repository: ",repoName);

    console.log("\n━━━━━━━━━━━━━━━━━━");
    console.log("📅 Timeline");
    showTimeLine();

    console.log("\n━━━━━━━━━━━━━━━━━━");
    console.log("👥 Contributors");
    showContributors();

    console.log("\n━━━━━━━━━━━━━━━━━━");
    console.log("📊 Stats");
    showStats();
};

module.exports = showStory;