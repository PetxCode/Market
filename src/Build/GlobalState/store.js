import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./StateManagement";

export const store = configureStore({
	reducer: { stateReducer },
});
