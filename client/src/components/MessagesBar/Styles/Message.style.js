import styled from "styled-components";

export const MessageStyle = styled.div`
  /* width: 100%; */
  /* align-self: flex-; */
  align-self: ${({ sender }) => (sender ? "flex-end" : 'flex-start')};
  p {
    font-weight: 400;
    font-size: 16px;
  }
  div {
  }
  .myMessage {
    background-color: #0c7fda;
    max-width: 230px;
    p{
      color: #fff;
    }
  }
  .friendMessage {
    display: flex;
    .messageBar__avatar {
      margin-right: 1rem;
    }
    .friendMessage__text {
      background-color: #edecec;
      width: 220px;
    }
  }
  .friendMessage__text,
  .myMessage {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 0.8rem 1rem;
  }
`;
