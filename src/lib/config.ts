import { Configuration } from '../types';

let config: Configuration = {
  CONSUMER_KEY: '',
  CONSUMER_SECRET: '',
  BEARER_TOKEN: ''
};

export const setConfig = (newValues: Configuration): void => {
  config = { ...config, ...newValues };
};

export const getConfig = (): Configuration => {
  return { ...config };
};
