export const parseUrl = url => {
  const params = {};

  // regexp pending
  url.slice(1).split('&').forEach(el => {
    let [k, v] = el.split('=');
    params[k] = v;
  });

  return params;
}

export const parseParams = params => {
  const url = [];

  Object.keys(params).forEach(k => {
    let v = params[k];
    url.push(`${k}=${v}`)
  });

  return `?${url.join('&')}`;
}