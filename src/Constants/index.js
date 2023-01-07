const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
// const REACT_APP_AUTH_DOMAIN = "";
// const REACT_APP_AUTH_CLIENT_ID = "";
// const REACT_APP_AUTH_CALLBACK_URL = "";

// export const LOCAL_STORAGE = {
// 	TOKEN: sessionStorage.getItem("jwtToken"),
// 	REFRESH_TOKEN: `REFRESH-TOKEN`,
// };

export const API = {
	AUTH: {
		LOGIN: `${REACT_APP_API_URL}/api/login`,
		LOGOUT: `${REACT_APP_API_URL}/api/logout`,
	},

	POSTS: `${REACT_APP_API_URL}/api/posts`,

	CATEGORIES: `${REACT_APP_API_URL}/api/categories`,

	POSTS: `${REACT_APP_API_URL}/api/posts`,
};

export const APP = {};
