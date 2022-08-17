import styled from "styled-components";

export const ContactStyle = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  .leftSide{
    display: flex;
    gap: .5rem;
    .contact__content {
      display: flex;
      flex-direction: column;
      gap: .5rem;
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
  .contact__content_time
  {
    font-weight: 400;
      font-size: 14px;
  }
`;
