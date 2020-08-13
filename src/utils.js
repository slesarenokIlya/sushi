export const apiCall = (path, params) => {
  return Promise.resolve([]);
  //return Promise.reject([]);
};

export const getFont = type =>
  type ? `SFUIDisplay-${type}` : 'SFUIDisplay-Regular';
