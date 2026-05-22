const gitLogs = require("./git")

const emojiMap = {
    feat: "✨",
    fix: "🐛",
    docs: "📝",
    refactor: "♻️",
    init: "🚀",
    test: "✅",
    style: "🎨"
};
// function to show the timeline
const showTimeLine = ()=>{
    const {commits,repoName} = gitLogs();
    
    commits.forEach(commit=>{
        const parts = commit.message.split(":");
        const type = parts[0]?.trim();
        const message = parts.slice(1).join(":").trim() || commit.message;
        const emoji = emojiMap[type] || "📌";
        const formattedDate =
    new Date(commit.date)
    .toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
        console.log(
            `${formattedDate} ${emoji} ${message}`
        );

    })
}

module.exports = showTimeLine