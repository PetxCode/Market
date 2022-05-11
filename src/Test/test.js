import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	product: [],
	cart: [],
};

const test = createSlice({
	name: "store",
	initialState,
	reducers: {
		addProduct: (state, { payload }) => {
			state.product = payload;
		},

		cartToCart: (state, { payload }) => {
			const check = state.cart.findIndex((el) => el.id === payload.id);
			if (check) {
				state.cart[check].QTY += 1;
			} else {
				const add = { ...payload, QTY: 1 };
				state.cart.push(add);
			}
		},

		changeItems: (state, { payload }) => {
			const check = state.cart.findIndex((el) => el.id === payload.id);
			const checkValue = state.cart[check].QTY;

			if (check > 1) {
				checkValue -= 1;
			} else if (check === 1) {
				state.cart = state.cart.filter((el) => el.id !== payload.id);
			}
		},

		remove: (state, { payload }) => {
			state.cart = state.cart.filter((el) => el.id !== payload.id);
		},

		finalCost: (state, { payload }) => {
			const { fullCost, fullItems } = state.cart.filter(
				(totalCost, totalItems) => {
					const { QTY, price } = totalItems;
					const mainCost = QTY * price;

					totalCost.fullItems += QTY;
					totalCost.fullCost += mainCost;

					return totalCost;
				},
				{ fullCost: 0, fullItems: 0 }
			);

			state.toalCostingPrice = totalCost;
			state.toalItems = totalItems;
		},
	},
});

export const {} = test.actions;

export default test.reducer;
