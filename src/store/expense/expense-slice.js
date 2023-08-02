import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expenseSlice",
    initialState: {
        income: 1000,
        expenseList: [],
        countActionPerformed: 0
    },
    reducers: {
        addExpense: (currentSlice, action) => {
            currentSlice.expenseList.push({...action.payload, price: Number.parseFloat(action.payload.price)});
            // console.log("addExpense()", action);
        },
        setIncome: (currentSlice, action) => {
            currentSlice.income = Number.parseFloat(action.payload);
            // console.log("addExpense()", action);
        },
        incrementCountActionPerformed: (currentSlice, action) => {
            currentSlice.countActionPerformed++;
            // console.log("addExpense()", action);
        }
    }
});

const { addExpense, setIncome, incrementCountActionPerformed } = expenseSlice.actions;
export { addExpense, setIncome, incrementCountActionPerformed };