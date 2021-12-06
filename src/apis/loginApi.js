import { makeRequest } from "./axios.helper";

const rootApi = process.env.REACT_APP_ROOT_API;

export const apiLogin = async obj => {
	const axiosObj = {
		method: "post",
		url: rootApi + "/login",
		data: obj,
	};
	return await makeRequest(axiosObj);
};
