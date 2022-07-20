import styled from "styled-components";

export const LayoutStyle = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  height: 880px;
  .Layout__Content {
    width: calc(100% - 650px - 3rem);
    display: flex;
    flex-direction: column;
  }
`;
