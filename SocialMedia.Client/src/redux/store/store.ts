import { configureStore } from "@reduxjs/toolkit";
import reactionReducer from "../features/ActiveReactions";
import themeReducer from "../features/Theme";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux/es/exports";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    reactions: reactionReducer,
    themes: themeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
