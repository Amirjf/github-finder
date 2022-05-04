import client from '../../client/client';

export const serachUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  try {
    const {
      data: { items },
    } = await client.get(`/search/users?${params}`);

    return items;
  } catch (err) {
    console.log(err);
  }
};

export const getUserAndRepos = async (login) => {
  try {
    const [user, repos] = await Promise.all([
      client.get(`/users/${login}`),
      client.get(`/users/${login}/repos`),
    ]);
    return { user: user.data, repos: repos.data };
  } catch (err) {
    console.log(err);
  }
};
