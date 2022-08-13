import styled from "styled-components";

export const FriendCardContainerStyle = styled.div`
  padding: 0.5rem .5rem;
  width: 100%;
  height: 100%;
  gap: 2rem;
  /* gap: calc(5vmin + 5px); */
  display: grid;
  /* repeat(auto-fit, minmax(235px, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(235px, 300px));;
  /* grid-template-columns: repeat(auto-fit, 235px); */
  /* place-items: center; */
  /* justify-content: space-between; */
  overflow: auto;
`;
