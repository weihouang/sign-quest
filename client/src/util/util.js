const onRedirectCallback = (appState) => {
  const defaultRedirect = window.location.origin + "/home";
  window.location.href = appState?.returnTo || defaultRedirect;
};

export default onRedirectCallback;
