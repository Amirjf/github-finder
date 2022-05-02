import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Authorization: 'token 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' },
});

export default client;
