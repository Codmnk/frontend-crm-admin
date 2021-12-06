import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "./pages/profile/adminUserSlice";

const store = configureStore({
	reducer: { admin: adminReducer },
});

export default store;
