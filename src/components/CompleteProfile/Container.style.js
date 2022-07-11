import styled from "styled-components";

export const ContainerStyle = styled.div`
  width: 1300px;
  /* min-height: px; */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  img {
    margin-bottom: 1rem;
  }
  .nextStep {
    width: 78%;
    display: flex;
    justify-content: space-between;
    /* padding: 2rem; */
    button {
      width: 160px;
      height: 50px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      border: none;
    }
  }
`;
