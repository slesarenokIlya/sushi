import {useState, useEffect} from 'react'
import {apiCall} from './utils'
/**/import {items, offers} from './_data.js'/**/

const _useHook = method => {
  const [data, setData] = useState([]);
  useEffect(() => {
    method().then(data => {
      setData(data);
    });
  }, []);
  return data;
}

export const loadItems = () => {
  //return apiCall('/getItems');
  return Promise.resolve(items);
}
export const useLoadItems= () => _useHook(loadItems);

export const loadOffers = () => {
  //return apiCall('/getItems');
  return Promise.resolve(offers);
}
export const useLoadOffers = () => _useHook(loadOffers);
