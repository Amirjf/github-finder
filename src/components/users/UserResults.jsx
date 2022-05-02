import React, { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../spinner/Spinner';

import UserItem from './UserItem';

const UserResults = () => {
  const { loading, users } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-2 gap-7 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <UserItem user={user} />
      ))}
    </div>
  );
};

export default UserResults;
