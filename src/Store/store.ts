import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import {
  persistStore,
  persistReducer as createPersistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { TEST_SLICE } from "./Slices/testSlice_counter";
import { SETTINGS_SLICE } from "./Slices/settingsSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [TEST_SLICE, SETTINGS_SLICE],
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
