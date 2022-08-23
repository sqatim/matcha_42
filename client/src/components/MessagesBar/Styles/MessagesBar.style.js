import styled from "styled-components";

export const MessagesBarStyle = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 355px;
  height: ${({ active }) => (!active ? "50px" : "500px")};
  padding: 0.8rem 1rem;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0px 0px 5.27px rgba(0, 0, 0, 0.3);
  border-radius: 10px 0px 0px 10px;
  transition: height 0.4s;
  overflow: ${({ active }) => (!active ? "hidden" : "auto")};
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  .messagesBar__header {
    width: 100%;
    height: 26px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    cursor: pointer;
    .messageBar__username {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      i {
        height: 16px;
        width: 28px;
        cursor: pointer;
      }
    }
  }
`;

export const ContactBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  .leftSide {
    display: flex;
    gap: 0.5rem;
    .contact__content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .contact__content_username {
        font-weight: 400;
        font-size: 15px;
      }
      .contact__content_lastMessage {
        width: 140px;
        color: #838696;
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
  .contact__content_time {
    font-weight: 400;
    font-size: 14px;
  }
`;

export const ConversationBarStyle = styled.div`
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

export const MessageBarStyle = styled.div`
  /* width: 100%; */
  /* align-self: flex-; */
  align-self: ${({ sender }) => (sender ? "flex-end" : "flex-start")};
  p {
    font-weight: 400;
    font-size: 16px;
  }
  div {
  }
  .myMessage {
    background-color: #0c7fda;
    max-width: 230px;
    p {
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

export const ContactContainerBarStyle = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
`;