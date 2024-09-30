import { createSlice } from "@reduxjs/toolkit";

const initialCounter = [
    {
      id: 1, 
      value: 0
    },
    {
      id: 2, 
      value: 0
    },
  ]
export const counterSlice  = createSlice({
name: 'counter',
initialCounter,
reducers : {
    increment: (state , action) =>{
       const counterIndex = state.findIndex(c => c.id === action.payload) 
        state[counterIndex].value += 1
    },
    decrement: (state , action) =>{
        const counterIndex = state.findIndex(c => c.id === action.payload) 
        state[counterIndex].value -= 1
    },
}
});

export const {increment , decrement}  = counterSlice.actions;
export default counterSlice.reducer