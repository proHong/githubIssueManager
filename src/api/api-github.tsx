import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
    userAgent: 'myApp v1.2.3',

    baseUrl: 'https://api.github.com',
    log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error
    },
})

export const getRepo = (owner:string, repo:string) => octokit.rest.repos.get({
    owner,
    repo,
});

export const searchRepos = (q:string, per_page:number, page:number) => octokit.rest.search.repos({
    q,
    per_page,
    page,
});

export const getIssues = (q:string, per_page:number, page:number) => octokit.rest.search.issuesAndPullRequests({
    q,
    sort: "created",
    per_page,
    page,
    order: 'desc',
});