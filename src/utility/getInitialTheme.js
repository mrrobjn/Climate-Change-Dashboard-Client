const getInitialTheme = () => {
  const savedTheme = JSON.parse(localStorage.getItem("darkTheme"));
  return savedTheme || false; // default to 'false' if no theme is saved
};
export default getInitialTheme;
