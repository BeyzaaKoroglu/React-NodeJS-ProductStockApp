import styled from 'styled-components';

export const Styled = styled.div`
  position: absolute;
  z-index: 1;
  background-color: rgba(50, 50, 50, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  color: black;

  div {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    background-color: rgb(225, 225, 225);
    border: 2px solid rgb(30, 66, 115);
    text-align: center;
    input {
      width: 75%;
      height: 30px;
      border-radius: 10px;
      border: 2px solid rgb(175, 175, 175);
      padding-left: 15px;
      padding-right: 15px;
      margin: 10px 20px;
    }
    button {
      width: 150px;
      height: 40px;
      background-color: rgb(125, 125, 125);
      border: 2px solid rgb(100, 100, 100);
      border-radius: 25px;
      font-weight: bold;
      font-size: 18px;
      margin: 25px 15px;
      &.addBtn {
        border: 2px solid rgb(0, 175, 0);
        background-color: rgb(68, 199, 103);
      }
    }
  }
`;
