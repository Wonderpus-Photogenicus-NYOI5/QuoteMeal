<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit'
import userreducer from './reducers/userreducer.js'
// import loginreducer from './reducers/loginreducer.js';
import testreducer from './reducers/testreducer.js'

const store = configureStore({
    reducer: {
        // login: loginreducer,
        user: userreducer,
        test: testreducer,
    },
})
=======
import { configureStore } from '@reduxjs/toolkit';
import userreducer from './reducers/userreducer.js';
import loginreducer from './reducers/loginreducer.js';
import testreducer from './reducers/testreducer.js';


const store = configureStore({
  reducer: {
    login: loginreducer,
    user: userreducer,
    test: testreducer
  },
});
>>>>>>> dev

export default store
