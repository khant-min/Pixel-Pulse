import { createSlice } from "@reduxjs/toolkit";
import { Reaction } from "../../types/global.types";
import { RootState } from "../store/store";

interface InitialStateProps {
  reaction: Reaction;
}

const initialState: InitialStateProps = {
  reaction: "like",
};

const reactionSlice = createSlice({
  name: "reactions",
  initialState,
  reducers: {
    userReaction: (state, action) => {
      state.reaction = action.payload;
    },
  },
});

export const reaction = (state: RootState) => state.reactions.reaction;

export const { userReaction } = reactionSlice.actions;

export default reactionSlice.reducer;
