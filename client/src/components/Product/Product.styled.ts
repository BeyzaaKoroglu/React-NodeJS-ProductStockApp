import styled from 'styled-components';

export const Styled = styled.li`
  span {
    width: 25%;
    padding: 5px;

    button {
      font-weight: bold;
      padding: 5px 15px;
      border-style: solid;
      border-radius: 20px;
      color: rgb(25, 25, 25);

      &.editBtn {
        background-color: rgb(239, 173, 77);
        border-color: rgb(179, 130, 58);
      }

      &.deleteBtn {
        background-color: rgb(217, 84, 79);
        border-color: rgb(163, 63, 60);
      }
    }
  }
`;
