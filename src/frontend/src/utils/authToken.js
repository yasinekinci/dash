export const getStoredAuthTokenInfo = () => {
    var authTokenData = localStorage.getItem('authTokenInfo');
    if (authTokenData) {
        return JSON.parse(authTokenData)
    }
};

export const getStoredAuthToken = () => {
    var authTokenInfo = getStoredAuthTokenInfo();
    if (authTokenInfo) {
        return authTokenInfo.token;
    }
};

export const storeAuthTokenInfo = data => localStorage.setItem('authTokenInfo', JSON.stringify(data));

export const removeStoredAuthTokenInfo = () => localStorage.removeItem('authTokenInfo');
