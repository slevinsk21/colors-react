const URL_API = 'https://reqres.in/api/';

const objectToQueryString = obj =>
  Object.keys(obj)
    .map(key => key + '=' + obj[key])
    .join('&');

export const getAll = async (url, params, method = 'GET') => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const URL_REQUEST = params ? url + '?' + objectToQueryString(params) : url;
  const response = await fetch(URL_API + URL_REQUEST, options);
  const result = await response.json();

  return result;
};
