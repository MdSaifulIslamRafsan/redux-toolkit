import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../component/features/counter/counterSlice";
import postsReducer from "../component/features/posts/postsSlice";

 const store = configureStore({
    reducer : {
        counters : counterReducer,
        posts : postsReducer
    }
});

export default store;
