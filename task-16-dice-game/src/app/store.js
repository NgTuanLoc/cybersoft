import { configureStore } from "@reduxjs/toolkit";
import gameLogicReducer from "../features/gameLogicSlide";

export const store = configureStore({
  reducer: {
    gameLogic: gameLogicReducer,
  },
});
