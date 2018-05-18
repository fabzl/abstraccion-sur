import axios from "axios";
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  // FETCH_DATA_FAILED,
  CHANGE_LANG
} from "../types";

// import { works } from '../../data';

const apiUrl = "http://maquinavisual.com/blog";
const pagesEndPoint = `${apiUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
const postsEndPoint = `${apiUrl}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts

const fetchSuccess = data => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  };
};

// const fetchFailed = err => {
//   return {
//     type: FETCH_DATA_FAILED,
//     error: err
//   };
// };

export const fetchData = dispatch => async dispatch => {
  let language = navigator.language || navigator.userLanguage;
  language = language.slice(0, 2);

  if (language !== "es") language = "en";

  dispatch({
    type: FETCH_DATA
  });

  let res = await axios.get(postsEndPoint);
  // Limpiar los datos
  const posts = res.data.filter(item => item.acf.avatar_picture);

  res = await axios.get(pagesEndPoint);
  const pages = res.data;
  dispatch(fetchSuccess({ posts, pages }));
  // axios
  //   .get(postsEndPoint)
  //   .then(res => {
  //     // Limpiar los datos
  //     const items = res.data.filter(item => item.acf.avatar_picture);
  //     dispatch(fetchSuccess(items));
  //   })
  //   .catch(err => dispatch(fetchFailed(err)));
};

export const changeLang = () => {
  return {
    type: CHANGE_LANG
  };
};
