import { useState } from "react";
import styled, { css } from "styled-components";

export const App = () => {
  const [counter,setCounter]=useState(0);

  // Destructuring
  // const state = useState(0)
  // const counter = state[0]
  // const setCounter = state[1]

  const handleIncrement=()=>{
    // const newValue = counter+1;
    // setCounter(newValue);
    setCounter((curr)=>curr+1);
  }
  const handleDecrement=()=>{
    // const newValue = counter+1;
    // setCounter(newValue);
    setCounter((curr)=>curr-1);
  }
  const handleReset=()=>{
    setCounter(()=>0);
  }

  const handleUpdate = (increment) => {
    setCounter((curr)=> increment? curr+1: curr-1)
  }
  return <div>
    <div>
      <PageContainer>
        <ContentWrapper>
        <Counter>{counter}</Counter>
        <ButtonWrapper>
          <ButtonLeft onClick={() => handleUpdate(false)}>😭</ButtonLeft>
          <ButtonRight onClick={() => handleUpdate(true)}>😊</ButtonRight>
        </ButtonWrapper>
        <Reset onClick={handleReset}>🔄️</Reset>
        </ContentWrapper>
      </PageContainer>
    </div>
  </div>;
};

const commonButtonStyles = css`
padding:20px;
font-size: 56px;
border: 1px solid black;
cursor:pointer;
user-select:none;
:hover {
  background-color:#61dafb;
}
`

const ButtonLeft = styled.div`
  border-radius: 15px 0 0 15px;
  ${commonButtonStyles};
`;

const ButtonRight = styled.div`
  border-radius: 0 15px 15px 0;
  ${commonButtonStyles}
`;

const ButtonWrapper=styled.div`
  display: flex;
`;

const PageContainer = styled.div`
  display:flex;
  justify-content: center;
  margin-top:150px;
`;

const ContentWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const Counter = styled.div`
  font-size: 56px;
  font-weight:bold;
  margin: 30px 0;
`;

const Reset = styled.div`
  font-size:48px;

`