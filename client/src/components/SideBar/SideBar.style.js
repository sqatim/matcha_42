import styled from "styled-components";

export const SideBarStyle = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  .matchaLogo {
    align-self: center;
    margin-bottom: 2rem;
  }

  hr {
    height: 1px;
    background-color: #e9e7f3;
    border: none;
    margin-top: 3rem;
  }
  padding: 2rem 0;
  gap: 2rem;
  box-shadow: 0px 3.16px 5.27px rgba(0, 0, 0, 0.15);
  border-radius: 0 6px 6px 0;
`;

export const InfoStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #000;
    cursor: pointer;
  }
  p {
    cursor: pointer;
  }
  padding-left: 1.8rem;
  margin-bottom: 1rem;
`;

export const SideBarListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 1.5rem;
  li {
    padding-left: 1.8rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    height: 60px;
    cursor: pointer;
    p {
      font-size: 16px;
      font-weight: 500;
      color: #838696;
    }
  }
  margin-bottom: 1rem;
`;

export const ItemListStyle = styled.li`
  ${({ check }) => check && `background: #F1F9FF;`}
  p {
    ${({ check }) => check && `color: #0C7FDA !important;`}
  }
  /* .sidBar__svg .test{
    fill: red !important;
    color: red !important;
    background-color: red !important;
  } */
  /* img{
    ${({ check }) => check && `fill: #0C7FDA !important;`}
  } */
`;
export const LogOutStyle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  p {
    font-size: 16px;
    font-weight: 500;
    color: #838696;
  }
  padding-left: 1.8rem;
  cursor: pointer;
`;
