const githubAuth = {
    githubToken: "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",
    githubUserName: "KamQuoss",
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
    "Content-Type": "application/json",
    "Authorization": `bearer ${githubAuth.githubToken}`,
};

export {headers, baseUrl}