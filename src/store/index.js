import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import recipeReducer from "./recipe";

// import redux-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { getDefaultMiddleware } from "@reduxjs/toolkit";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const rootReducer = combineReducers({
  auth: authReducer,
  recipe: recipeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "recipe"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});
export const persistor = persistStore(store);
export default store;
