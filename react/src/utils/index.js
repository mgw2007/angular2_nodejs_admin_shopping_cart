import { UserAuthWrapper } from "redux-auth-wrapper";
import { push } from "react-router-redux";

export const requireAuthentication = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: push,
  wrapperDisplayName: "UserIsJWTAuthenticated"
});
export const createGroupedArray = (arr, chunkSize) => {
  var groups = [],
    i;
  for (i = 0; i < arr.length; i += chunkSize) {
    groups.push(arr.slice(i, i + chunkSize));
  }
  return groups;
};
