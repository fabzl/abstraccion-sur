import { LOADER_LOADING, CONTENT_LOADED, LOADER_VISIBLE } from "../types";

export const loaderLoading = () => {
  return {
    type: LOADER_LOADING
  };
};

export const contentLoaded = () => {
  return {
    type: CONTENT_LOADED
  };
};
export const loaderVisible = () => {
  return {
    type: LOADER_VISIBLE
  };
};
