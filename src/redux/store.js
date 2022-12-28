import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from './slices/contacts';

const rootReducer = combineReducers({
  contacts: contactsReducer
});

const persistConfig = {
  key: "root",
  storage: storage,
};

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const psReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: psReducer,
  middleware: customizedMiddleware,
});

const persiStore = persistStore(store);

export { persiStore, store };
