let url = `https://api.github.com/users/Madina-webdeveloper`;

export const api = {
  getUser: async () => {
    const response = await fetch(url);
    const result = await response.json();

    return result;
  },
  getRepo: async () => {
    const response = await fetch(`${url}/repos`);
    const result = await response.json();
    return result;
  },
  getFollowers: async ()=>{
    const response = await fetch(`${url}/followers`);
    const result = await response.json();
    return result;
  },
  getFollowing: async ()=>{
    const response = await fetch(`${url}/following`);
    const result = await response.json();
    return result;
  },
};
