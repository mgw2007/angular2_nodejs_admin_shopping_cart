export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";

export const showLoader = message => ({
  type: SHOW_LOADER
});
export const hideLoader = messageKey => ({
  type: HIDE_LOADER
});
