const githubAuth = {
    githubToken: "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",
    githubUserName: "KamQuoss",
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
    "Content-Type": "application/json",
    Authorization: "bearer " + githubAuth.githubToken,
};

export {headers, baseUrl}