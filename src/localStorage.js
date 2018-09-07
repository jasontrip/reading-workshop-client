
const loadAuthToken = () => localStorage.getItem('authToken');

const saveAuthToken = (authToken) => {
  try {
    localStorage.setItem('authToken', authToken);
  } catch (e) {}
};

const clearAuthToken = () => {
  try {
    localStorage.removeItem('authToken');
  } catch (e) {}
};

module.exports = { loadAuthToken, saveAuthToken, clearAuthToken };
