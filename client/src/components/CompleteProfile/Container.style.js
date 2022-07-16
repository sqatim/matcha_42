import styled from "styled-components";

export const ContainerStyle = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  position: relative;
  .logo {
    margin-bottom: 1rem;
  }
  .logOut {
    position: absolute;
    width: 33px;
    right: 0;
    top: 1rem;
    display: flex;
    align-items: center;
    transition: width 1s;
    -webkit-transition: width 1s;
    cursor: pointer;
    .logOut_text {
      width: 0;
      transition: width 1s;
      -webkit-transition: width 1s;
      overflow: hidden;
      font-weight: 600;
      font-size: 18px;
    }

    :hover {
      width: 115px;
      gap: 0.5rem;
      .logOut_text {
        width: auto;
      }
    }
  }
  .nextStep {
    width: 78%;
    display: flex;
    justify-content: space-between;
    button {
      width: 160px;
      height: 50px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      border: none;
      color: #fff;
      font-weight: 500;
      font-size: 16px;
    }
    .nextStep__next {
      background-color: #0c7fda;
      cursor: pointer;
    }
  }
`;

export const BackButtonStyle = styled.button`
  background-color: #0c7fda;
  cursor: pointer;
  ${({ disable }) =>
    disable && `background-color: #D9D9D9; cursor: not-allowed`}
`;
