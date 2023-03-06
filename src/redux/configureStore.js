import {configureStore,combineReducers,getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import userReducer from "./reducers/userSlice";
import nasaReducer from "./reducers/nasaSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  user: userReducer,
  nasa: nasaReducer
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});
sagaMiddleware.run(watcherSaga);

export default store;
