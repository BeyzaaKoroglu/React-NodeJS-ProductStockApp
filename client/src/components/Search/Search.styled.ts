import styled from 'styled-components';

export const Styled = styled.input`
  width: 35%;
  height: 30px;
  border-radius: 20px;
  border: 2px solid rgb(175, 175, 175);
  padding-left: 15px;
  padding-right: 15px;
  margin: 10px 20px;

  @media (max-width: 540px) {
    width: 50%;
  }
`;
