import styled from "styled-components";

export const NotificationStyle = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #e9e7f3;
  padding: 4rem 0;
  cursor: pointer;
  :hover {
    background-color: #f7f7f7;
  }
  /* background-color: ${({ checked }) => !checked && "#F4F3F3"}; */
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  p {
    font-size: 17px;
    font-weight: 400;
  }
  .notification__content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: calc(100% - 80px - 15px - 2rem);
    .notification__content_text {
      span {
        font-weight: 600;
        font-size: 18px;
      }
    }
    .notification__content_time {
      color: #0c7fda;
      font-size: 14px;
    }
  }
  .notification__content_checked {
    width: 15px;
    height: 15px;
    background-color: #0c7fda;
    border-radius: 50%;
  }
`;
export const NotificationsContainerStyle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* gap: 1rem; */
`;
