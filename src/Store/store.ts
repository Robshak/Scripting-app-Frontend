import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import {
  persistStore,
  persistReducer as createPersistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PROJECTS_SLICE } from "./Slices/projectsSlice";
import { USER_DATA_SLICE } from "./Slices/userData";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [USER_DATA_SLICE, PROJECTS_SLICE],
};

const persistReducer = createPersistReducer(
  persistConfig,
  rootReducer
);

const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
