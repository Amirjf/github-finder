import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';
import { getUser } from '../context/github/GithubActions';
import { getUserAndRepos } from '../context/github/GithubActions';
import Spinner from '../components/spinner/Spinner';
const User = () => {
  const { user, repos, loading, dispatch } = useContext(GithubContext);
  const params = useParams();

  const fetchUser = async () => {
    dispatch({ type: 'SET_LOADING' });

    const userdata = await getUserAndRepos(params.login);
    dispatch({ type: 'GET_USER_AND_REPOS', payload: userdata });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log('user', user);
  console.log('repos', repos);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {user.login}
      <br />
      {user.bio}
      <ul>
        {repos.map((repo) => {
          return <li>{repo.full_name}</li>;
        })}
      </ul>
      <hr />
      <br />
      <h2>maybe some other day i design this page : ) pls :` )</h2>
      <br />
      <h2>OR</h2>
      <br />
      <h2>maybe you do it for me ? :` )</h2>
      <br />
      <h2>Repos :</h2>
    </div>
  );
};

export default User;
