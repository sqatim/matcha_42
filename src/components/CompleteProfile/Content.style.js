import styled from "styled-components";

export const ContentStyle = styled.div`
  width: 100%;
  height: 650px;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const UploadPhotosStyle = styled.div`
  display: flex;
  padding: 0 2rem;
  /* justify-content: sp; */
  align-items: center;
  gap: calc(((100% - 1050px) / 2));
  width: 100%;
  height: 480px;
  flex-wrap: wrap;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  .uploadPhotos__images {
    min-width: 240px;
    height: 465px;
    width: 350px;
    margin-bottom: 0.95rem;
    overflow: hidden;
    img {
      border-radius: 5px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .uploadPhotos__add {
    min-width: 240px;
    height: 465px;
    width: 350px;
    margin-bottom: 0.95rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px dashed #aca9bb;
  }
  .uploadPhotos__input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    cursor: pointer;
    p {
      font-weight: 500;
      font-size: 20px;
      color: #0c7fda;
    }
  }
  @media screen and (max-width: 1090px) {
    /* gap: 1rem; */
    justify-content: center;
    .uploadPhotos__images {
      width: 370px;
    }
    .uploadPhotos__add {
    }
  }
  @media screen and (max-width: 1400px) and (min-width: 1089px) {
    gap: calc(((100% - 700px)));
    padding: 0 calc((100% - 800px) / 2);
  }
`;

export const LocalisationStyle = styled.div`
  /* background-color: red; */
  width: 95%;
  height: 90%;
`;
