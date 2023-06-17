import { configureStore } from '@reduxjs/toolkit'
import userreducer from './reducers/userreducer.js'
import loginreducer from './reducers/loginreducer.js'
import testreducer from './reducers/testreducer.js'
import signupreducer from './reducers/signupreducer.js'

const store = configureStore({
    reducer: {
        login: loginreducer,
        user: userreducer,
        test: testreducer,
        signup: signupreducer,
    },
})

export default store;
