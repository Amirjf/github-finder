import { createContext, useReducer } from 'react';
import gitHubReducer from './GithubReducer';
import client from '../../client/client';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  const serachUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });
    try {
      setLoading();
      const { items } = await client.get(`/search/users/?${params}`);
      dispatch({
        type: 'GET_USERS',
        payload: items,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{ loading: state.loading, users: state.users, serachUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
