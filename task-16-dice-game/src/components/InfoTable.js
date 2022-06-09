import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { startGameHandler } from "../features/gameLogicSlide";

const InfoTable = () => {
  const { choice, result, numberOfGame } = useSelector(
    (state) => state.gameLogic
  );
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h1>Bạn chọn: {choice === 0 ? "Tài" : "Xỉu"}</h1>
      <h3>Số Bàn Thắng {result}</h3>
      <h4>Tổng số bàn chơi {numberOfGame}</h4>
      <button onClick={() => dispatch(startGameHandler())}>Play Game</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin: 2rem auto;
  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 2rem;
  }

  button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 1.5rem 2rem;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 2rem;
  }
`;

export default InfoTable;
