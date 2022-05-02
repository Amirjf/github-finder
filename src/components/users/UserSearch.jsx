import React, { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import GithubContext from '../../context/github/GithubContext';

const UserSearch = () => {
  const { users, serachUsers } = useContext(GithubContext);

  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alert('pls enter submit');
    } else {
      //todo search users
      serachUsers(text);
      setText('');
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8">
      <div className="form-control">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={text}
              onChange={handleChange}
              placeholder="Search…"
              className="input w-1/2 text-white bg-neutral text-lg input-bordered outline-hidden border-none"
            />
            <button className="btn btn-square ">
              <FiSearch size={20} />
            </button>
          </div>
        </form>
        {users.length > 0 && (
          <div className="flex justify-start mt-4">
            <button className="btn btn-ghost p-1">Clear</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
