import config from "../utils/config";

const logout = async (authState, authService) => {
  const { issuer } = config.oidc;
  const redirectUri = window.location.origin;
  // Read idToken before local session is cleared
  const idToken = authState.idToken;
  // clear user token that was set for the extension
  localStorage.removeItem("token");
  // Clear remote session
  window.location.href = `${issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${redirectUri}`;

  await authService.logout("/");
};

export default logout;
