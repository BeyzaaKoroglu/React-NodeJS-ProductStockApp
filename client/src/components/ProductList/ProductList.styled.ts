import styled from 'styled-components';

export const Styled = styled.div`
  margin-top: 50px;
  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: flex;
      justify-content: space-between;
      border: solid rgb(175, 175, 175);
      border-width: 0 0 2px 0;

      b {
        width: 25%;
        padding: 10px;
        font-size: 18px;
        button {
          font-weight: bold;
          padding: 7px 15px;
          border-style: solid;
          border-radius: 20px;
          color: white;
          border: 2px solid rgb(0, 175, 0);
          background-color: rgb(68, 199, 103);
        }
      }
    }
  }
`;
