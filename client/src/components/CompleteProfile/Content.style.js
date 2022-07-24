import styled from "styled-components";

export const ContentStyle = styled.div`
  width: 100%;
  height: 500px;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const PersonalInformationStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
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
    height: 50px;
    overflow: hidden;
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
      border: none;
      border: 1px solid #d9d9d9;
      resize: none;
      padding-left: 0.5rem;
      height: 80px;
      width: 86%;
    }
  }
`;

export const UploadPhotosStyle = styled.div`
  position: absolute;
  display: flex;
  padding: 1.5rem 2rem;
  /* justify-content: left; */
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
    height: 440px;
    width: 350px;
    margin: 0rem 0 0.6rem;
    position: relative;
    .uploadPhotos__images_photo {
      border-radius: 5px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .uploadPhotos__images_cancel {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      display: none;
    }
    :hover {
      .uploadPhotos__images_cancel {
        display: unset;
      }
    }
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
      width: 370px;
    }
  }
  @media screen and (max-width: 1400px) and (min-width: 1089px) {
    gap: calc(((100% - 700px)));
    padding: 0 calc((100% - 800px) / 2);
  }
`;

export const LocalisationStyle = styled.div`
  /* background-color: red; */
  position: relative;

  width: 95%;
  height: 90%;
  .map__buttons {
    position: absolute;
    bottom: 2rem;
    right: 1rem;
    z-index: 1000;
    .map__geolocate {
      margin-bottom: 0.3rem;
    }
    .map__geolocate,
    .map__geolocate_off {
      background-color: #fff;
      width: 40px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      cursor: pointer;
      z-index: 1000;
    }
  }
`;

export const TextStyle = styled.p`
  color: ${({ dataMissing, data }) => (dataMissing && !data ? "red" : "#000")};
`;

export const AddPhotoStyle = styled.div`
  min-width: 240px;
  height: 440px;
  width: 350px;
  margin: 0rem 0 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${({ dataMissing, length }) =>
    dataMissing && !length ? "1px dashed red" : "1px dashed #aca9bb"};
`;

export const TagsInputStyle = styled.div`
  /* width: 100%; */
  border: ${({ dataMissing, data }) =>
    dataMissing && !data ? "1px solid red" : "1px solid #d9d9d9"};
  height: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: 86%;
  padding-right: 2rem;
  padding-left: 0.5rem;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  .personnalInformation__tags_tag {
    border: 1px solid #1e96ff;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0 0.8rem;
    height: 60%;
    background-color: #e6f7ff;
    p {
      min-width: unset;
      color: #1e96ff;
    }
  }
  input {
    border: none;
    height: 100%;
    width: -webkit-fill-available;
    padding-left: 0.2rem;
  }
`;
