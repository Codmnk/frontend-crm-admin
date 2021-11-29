import axios from "axios";

const rootApi = process.env.REACT_APP_ROOT_API;

const makeRequest = async obj => {
	try {
		const { data } = await axios(obj);
		return data;
	} catch (error) {
		return { status: "error", error: error.message };
	}
};

export const apiRegister = async obj => {
	const axiosObj = {
		method: "post",
		url: rootApi + "/admin-user",
		data: obj,
	};
	return await makeRequest(axiosObj);
};
