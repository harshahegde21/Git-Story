const getGitLogs = require("./git")

const showContributors = ()=>{
    const {commits} = getGitLogs();
    const contributors = {};
    commits.forEach(commit=>{
        const author = commit.author;
        // counting the commits
        contributors[author] = (contributors[author] || 0)+1; 
    });
    // 
    
    Object.entries(contributors).sort((a,b)=>b[1]-a[1]).forEach(([author,count])=>{
        const percentage = parseInt(((count/commits.length)*100).toFixed(1)) 
        console.log(`${author} - ${count} commits (${percentage}%)`);
    });
    
}
module.exports = showContributors;