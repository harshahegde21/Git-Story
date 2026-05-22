const {execSync} = require("child_process")

// function to get the all git logs
const getGitLogs = ()=>{
    const data = execSync('git log --pretty=format="%ad|%an|%s" --date=short' );
    return data.toString();
}

module.exports = getGitLogs