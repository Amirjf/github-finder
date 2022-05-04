import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';

const User = () => {
  const { user, getUser } = useContext(GithubContext);
  const { data } = user;
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  console.log(data);
  return (
    <div>
      {data.login}
      <br />
      {data.bio}
    </div>
  );
};

export default User;
