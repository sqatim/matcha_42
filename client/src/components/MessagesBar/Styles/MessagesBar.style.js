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
