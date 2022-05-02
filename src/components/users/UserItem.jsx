import React from 'react';

const UserItem = ({
  user: { login, avatar_url, url, bio, following, followers, public_repos },
}) => {
  return (
    <div className="flex md:flex bg-neutral rounded-full shadow-xl">
      <div className="">
        <img
          className="w-24 h-24 md:h-auto mask mask-squircle "
          src={avatar_url}
          alt="Shoes"
        />
      </div>
      <div className="pl-4 flex justify-center items-center">
        <h2 className="card-title">{login}</h2>
      </div>
    </div>
  );
};

export default UserItem;
