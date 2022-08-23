import styled from "styled-components";

export const MessagesStyle = styled.div`
  height: calc(100% - 70px - 1.4rem);
  width: 100%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  .messages__header {
    padding: 1rem;
    border-bottom: 1px solid #e9e7f3;
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
      font-weight: 400;
      font-size: 18px;
    }
    margin-bottom: 1.5rem;
  }
`;
