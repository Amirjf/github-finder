import { createContext, useReducer } from 'react';
import gitHubReducer from './GithubReducer';
import client from '../../client/client';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    usersFollowers: [],
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
