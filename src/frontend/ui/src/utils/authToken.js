export const getStoredAuthToken = () => {
    var authTokenData = localStorage.getItem('authToken');
    if (authTokenData) {
        return authTokenData
    }
};

export const storeAuthToken = data => localStorage.setItem('authToken', data);

export const removeStoredAuthToken = () => localStorage.removeItem('authToken');
