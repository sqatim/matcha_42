import styled from "styled-components";

export const ConversationStyle = styled.div`
  width: 100%;
  height: calc(100% - 26px - 1.5rem);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  .Conversation__messages {
    height: calc(100% - 40px);
    width: 100%;
    display: flex;
    gap: 0.8rem;
    flex-direction: column-reverse;
    overflow: auto;
  }
  .Conversation__sendMessage {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    input {
      width: 270px;
      height: 40px;
      border-radius: 10px;
      border: 1px solid #0c7fda;
      padding-left: 0.5rem;
    }
    i {
      height: 16px;
      font-size: 110%;
      color: #0c7fda;
    }
  }
`;
