import { createSlice } from "@reduxjs/toolkit";
import { generateRandomNumber } from "../utils/generateRandomNumber";
import { getResult } from "../utils/getResult";

const initialState = {
  randomDice: { dice1: 0, dice2: 1, dice3: 5 },
  choice: 0,
  result: 0,
  numberOfGame: 0,
};

const gameLogicSlice = createSlice({
  name: "game-logic",
  initialState,
  reducers: {
    makingChoice: (state, action) => {
      state.choice = action.payload;
    },
    startGameHandler: (state) => {
      state.randomDice = {
        dice1: generateRandomNumber(),
        dice2: generateRandomNumber(),
        dice3: generateRandomNumber(),
      };
      state.numberOfGame += 1;

      if (getResult(state.randomDice) === state.choice) {
        state.result += 2;
      } else {
        state.result -= 1;
      }
    },
  },
});

export default gameLogicSlice.reducer;

export const { makingChoice, startGameHandler } = gameLogicSlice.actions;
