const gitRepoInfo = require('git-repo-info');

const setBranchEnvironment = () => {
    const { branch } = gitRepoInfo();
    const isNetlify = process.env.NETLIFY;

    process.env.GATSBY_CMS_BRANCH = isNetlify ? process.env.HEAD : branch;
};

module.exports = {
    setBranchEnvironment,
};
