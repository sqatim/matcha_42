import styled from "styled-components";

export const ContactContainerStyle = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 0.8rem;
`;

export const ContactStyle = styled.div`
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
        /* background-color: red; */
        width: 140px;
        /* height:25px */
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

export const ConversationsBarSearchStyle = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 355px;
  height: 100vh;
  /* padding: 0.8rem 1rem; */
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 20%);
  border-radius: 10px 0px 0px 10px;
  .conversationBarSearch__header {
    height: 70px;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    width: 100%;
    margin-bottom: 1.4rem;
    border-radius: 0 0 6px 6px;
  }
  .conversationBarSearch__bottom {
    .conversationBarSearch__search {
      display: flex;
      gap: 1rem;
      padding: 1rem 1rem;
      align-items: center;
      input {
        width: 240px;
        height: 45px;
        background-color: #f4f3f3;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
        border-radius: 28px;
        border: none;
        padding: 1rem;
      }
      border-bottom: 1px solid #e9e7f3;
    }
  }
`;

export const ConversationStyle = styled.div`
  width: 100%;
  height: calc(100% - 88px - 1.5rem);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 0 1rem 1rem;
  .Conversation__messages {
    height: calc(100% - 40px);
    width: 100%;
    display: flex;
    gap: 0.8rem;
    flex-direction: column-reverse;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .Conversation__sendMessage {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    input {
      width: 85%;
      height: 40px;
      border-radius: 10px;
      border: 1px solid #0c7fda;
      padding-left: 0.5rem;
    }
    .Conversation__sendButton {
      display: flex;
      background-color: #0c7fda;
      height: 40px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      width: 100px;
      align-items: center;
      justify-content: center;
      gap: .4rem;
      p {
        color: #fff;
        font-weight: 400;
        font-size: 16px;
      }
      i {
        cursor: pointer;
        color: white;
        height: 16px;
        font-size: 110%;
      }
    }
  }
`;

export const MessageStyle = styled.div`
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
    display: flex;
    /* max-width: 230px; */
    .myMessage__text {
      background-color: #0c7fda;
    }
    p {
      color: #fff;
    }
    .messageBar__avatar {
      margin-left: 1rem;
    }
  }
  .friendMessage {
    display: flex;
    .friendMessage__text {
      background-color: #edecec;
      /* width: 220px; */
    }
    .messageBar__avatar {
      margin-right: 1rem;
    }
  }
  .friendMessage__text,
  .myMessage__text {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 0.8rem 1rem;
    p {
      max-width: 450px;
    }
  }
`;
