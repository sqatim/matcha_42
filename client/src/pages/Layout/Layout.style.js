import styled from "styled-components";

export const LayoutStyle = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  height: 900px;
  .Layout__Content {
    height: 100%;
    width: calc(100% - 650px - 3rem);
    display: flex;
    flex-direction: column;
  }
`;
