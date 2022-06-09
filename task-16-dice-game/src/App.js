import styled from "styled-components";

import backgroundImage from "./assets/bgGame.png";
import BoxChoice from "./components/BoxChoice";
import InfoTable from "./components/InfoTable";
import DiceContainer from "./components/DiceContainer";

function App() {
  return (
    <Wrapper className="container">
      <h1 className="title">Game Đổ xúc xắc</h1>
      <div className="container-center">
        <BoxChoice choice={0} />
        <DiceContainer />
        <BoxChoice choice={1} />
      </div>
      <InfoTable />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImage});
  text-align: center;
  padding: 2rem;

  .container-center {
    display: flex;
    justify-content: space-around;
  }
`;

export default App;
