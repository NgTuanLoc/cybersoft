import styled from "styled-components";
import { useSelector } from "react-redux";

import { ImageData } from "../assets/Image";

const DiceContainer = () => {
  const { randomDice } = useSelector((store) => store.gameLogic);
  const { dice1, dice2, dice3 } = randomDice;

  return (
    <Wrapper>
      <img src={ImageData[dice1]} alt="1" />
      <img src={ImageData[dice2]} alt="2" />
      <img src={ImageData[dice3]} alt="3" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    width: 7rem;
    margin: auto 1rem;
    border-radius: 5px;
  }
`;

export default DiceContainer;
