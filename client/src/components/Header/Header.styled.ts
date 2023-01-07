import styled from 'styled-components';

export const Styled = styled.header`
  background-color: rgb(30, 66, 115);
  color: white;
  display: flex;
  justify-content: space-between;

  p {
    margin: 10px 20px;
    font-size: 24px;
  }
  
  button {
    margin: 10px 20px;
    border: 2px solid rgb(0, 175, 0);
    background-color: rgb(68, 199, 103);
    color: white;
    font-weight: bold;
    font-size: 14px;
    padding: 5px 15px;
    border-radius: 20px;
  }
`;
