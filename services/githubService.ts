import { GitHubUser } from "@/redux/slices";

 

 

export const getGithubUserDetails = async (username: string): Promise<GitHubUser> => {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Accept: 'application/vnd.github+json',

    }
  });
    if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  return await res.json();
};
export const listGithubUsers = async (since: number = 0, perPage: number = 30) => {
  const res = await fetch(`https://api.github.com/users?since=${since}&per_page=${perPage}`, {
    headers: {
      Accept: 'application/vnd.github+json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await res.json()
console.log("data...", data);

  return data
};