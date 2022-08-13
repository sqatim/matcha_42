import styled from "styled-components";

export const FriendCardStyle = styled.div`
  width: 100%;
  /* width: 230px; */
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.39);
  border-radius: 10px;

  .FriendCard__information {
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        text-align: center;
      }
    .FriendCard__information_fullname {
      height: 28.28px;
      overflow: hidden;
      font-weight: 500;
      font-size: 18px;
    }
    .FriendCard__information_username {
      font-weight: 400;
      font-size: 18px;
      color: #838696;
    }
  }
  .FriendCard__buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      width: 80px;
      height: 35px;
      border-radius: 10px;
      border: none;
      color: #fff;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
    }
    .FriendCard__buttons_contact {
      background-color: #0c7fda;
    }
    .FriendCard__buttons_remove {
      background-color: #ff4b55;
    }
  }
`;


export const FriendCardAvatarStyle = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    /* overflow: hidden; */
    position: relative;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .FriendCard__avatar_status{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        right: 0.3rem;
        bottom: .6rem;
        padding: .2rem;
        .FriendCard__avatar_status_type{
            width: 100%;
            height: 100%;
            background-color: ${({status}) => status === 'Online' ? "#10C538": "#FF0000"};
            border-radius: 50%;
        }
    }
`;