import styled from "styled-components";

export const ContentStyle = styled.div`
  width: 100%;
  height: 650px;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const PersonalInformationStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
  p {
    min-width: 110px;
  }
  .personnalInformation__button_add {
    background-color: #0c7fda;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    width: 85px;
    height: 50px;
    cursor: pointer;
  }
  .personnalInformation__radio {
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;
    .ant-radio-wrapper {
      width: 84px;
    }
  }

  .personnalInformation__tags_input {
    display: flex;
    gap: 1.2rem;
    width: 60%;
    justify-content: space-between;
    input {
      height: 50px;
      width: 86%;
      padding-left: 0.5rem;
    }
  }
  .personnalInformation__biography_textarea {
    display: flex;
    gap: 1.2rem;
    width: 60%;
    justify-content: space-between;

    .personnalInformation__biography_text {
      align-self: flex-start;
    }
    textarea {
      padding-left: 0.5rem;
      height: 80px;
      width: 86%;
    }
  }
`;
