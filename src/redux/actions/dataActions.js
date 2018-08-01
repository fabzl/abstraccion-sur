import axios from "axios";
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  // FETCH_DATA_FAILED,
  CHANGE_LANG
} from "../types";

// import { works } from '../../data';

const apiUrl = "https://www.abstraccionsur.com/blog";
const pagesEndPoint = `${apiUrl}/wp-json/wp/v2/pages?per_page=100`; // Endpoint for getting Wordpress Pages
const postsEndPoint = `${apiUrl}/wp-json/wp/v2/posts?per_page=100`; // Endpoint for getting Wordpress Posts

const fetchSuccess = data => {
  console.dir(data);

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

  const posts = res.data;

  res = await axios.get(pagesEndPoint);
  const pages = res.data;

  const artists = pages.filter(p => p.acf.artista_entrevistado);
  const documents = pages.filter(p => p.acf.nombre_del_documento);
  const artwork = posts.filter(p => p.acf.titulo);
  const facts = posts.filter(p => p.acf.nombre);

  // console.log("artists :", artists);
  // console.log("artwork :", artwork);
  // console.log("facts :", facts);
  // console.log("documents :", documents);

  // const posts = res.data.filter(item => item.acf.avatar_picture);

  dispatch(fetchSuccess({ posts, pages, artists, documents, artwork, facts }));
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
