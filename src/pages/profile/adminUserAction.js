import { apiLogin } from "../../apis/loginApi";
import { toast } from "react-toastify";
import {
	isPending,
	requestSuccess,
	requestFailed,
	adminLoggedIn,
	adminLogOut,
	getProfileSuccess,
} from "./adminUserSlice";

export const adminLogin = data => async dispatch => {
	dispatch(isPending());
	const result = await apiLogin(data);
	console.log(result);
	if (result.status === "success") {
		window.sessionStorage.setItem("accessJWT", result.accessJWT);
		window.localStorage.setItem("refreshJWT", result.refreshJWT);
		dispatch(adminLoggedIn());

		// dispatch fetch user api
	} else {
		toast.error(result.message);
		dispatch(requestFailed());
	}
};
