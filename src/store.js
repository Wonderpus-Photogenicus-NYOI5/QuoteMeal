import { configureStore } from '@reduxjs/toolkit';
import userreducer from './reducer/userreducer.js';
import loginreducer from './reducer/loginreducer.js';
import testreducerfrom './reducer/testreducer.js';


const store = configureStore({
  reducer: {
    login: loginreducer,
    posts: postsreducer,
    test: testreducer
  },
});


export default store;