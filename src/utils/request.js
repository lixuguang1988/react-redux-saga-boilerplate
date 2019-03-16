import qs from 'qs';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

const defaultConfig ={
  headers : {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  // 'credentials': 'include',
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function getJSON(url) {
  return fetch(url, defaultConfig)
    .then(checkStatus)
    .then(parseJSON)
    .then(({data, success}) => {
      if(success !== true){
        throw new Error('数据错误');
      }
      return data;
    })
    // .catch(err => ({ err }));
}


/**
 * POST Request, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function post(url, body) {
  return fetch(url, { ...defaultConfig, method: 'POST', body: qs.stringify(body)})
    .then(checkStatus)
    .then(parseJSON)
    // .then(({data}) => data )
    // .catch(err => ({ err }));
}