import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Themes } from "../../types";

interface InitialStateProps {
  theme: Themes;
}

const initialState: InitialStateProps = {
  //   toggle: localStorage.getItem("theme"),
  theme: "LIGHT",
};

const themeReducer = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state, action) => {
      console.log("state: ", state, " : ", "action: ", action);

      state.theme = action.payload;
    },
  },
});

// const lightDarkReducer = createSlice({
//   name: "light_dark",
//   initialState,
//   reducers: {
//     toggleLightDark: (state, action) => {
//       localStorage.setItem(
//         "theme",
//         action.payload === "light" ? "DARK" : "LIGHT"
//       );
//       state.toggle = action.payload;
//     },
//   },
// });

export const toggling = (state: RootState) => state.themes.theme;

export const { toggle } = themeReducer.actions;

export default themeReducer.reducer;
