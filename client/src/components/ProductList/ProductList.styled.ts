import styled from 'styled-components';

export const Styled = styled.div`
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
      }
    }
  }
`;
