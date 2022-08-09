import styled from "styled-components";

export const ProfileContentStyle = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  gap: 1rem;
  .ProfileContent__edit {
    display: flex;
    gap: 1rem;
    align-self: flex-end;
    .ProfileContent__edit_child {
      padding: 0 1rem;
      display: flex;
      gap: 0.3rem;
      height: 30px;
      cursor: pointer;
      p {
        font-weight: 400;
        font-size: 18px;
        :hover {
          text-decoration: underline;
        }
      }
      i {
        font-size: 18px;
        margin-top: 0.1rem;
      }
    }
  }
  .ProfileContent__content {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 590px;
  }
`;

export const ProfileInformationEditStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 4rem;
  display: flex;
  gap: 1.5rem;
  height: 635px;
  flex-direction: column;
  .details {
    width: 100%;
    .details__info {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p,
      input,
      select {
        font-weight: 400;
        font-size: 18px;
      }
      input {
        width: max-content;
        text-align: right;
        border: none;
        cursor: pointer;
      }
      select {
        border: none;
        background-color: white;
        appearance: none;
        text-align: right;
        cursor: pointer;
        :focus {
          outline: none;
          /* background: #E5E5E5; */
        }
      }
      border-bottom: 1px solid #e9e7f3;
    }
  }
  .profileInformationEdit__saveButton {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;
    button {
      background-color: #fff;
      width: 160px;
      height: 50px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      border: none;
      color: #fff;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
    }
    .profileInformationEdit__saveButton_cancel {
      color: #0c7fda;
    }
    .profileInformationEdit__saveButton_save {
      background-color: #0c7fda;
    }
  }
`;

export const ProfileEditPasswordStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 4rem;
  display: flex;
  gap: 1.5rem;
  height: 635px;
  flex-direction: column;
  justify-content: space-between;
  .details {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    .details__info {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p,
      input,
      select {
        font-weight: 400;
        font-size: 18px;
      }
      input {
        width: max-content;
        text-align: right;
        border: none;
        cursor: pointer;
      }
      select {
        border: none;
        background-color: white;
        appearance: none;
        text-align: right;
        cursor: pointer;
        :focus {
          outline: none;
        }
      }
      border-bottom: 1px solid #e9e7f3;
    }
  }
  .profileInformationEdit__saveButton {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;
    button {
      background-color: #fff;
      width: 160px;
      height: 50px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      border: none;
      color: #fff;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
    }
    .profileInformationEdit__saveButton_cancel {
      color: #0c7fda;
    }
    .profileInformationEdit__saveButton_save {
      background-color: #0c7fda;
    }
  }
`;

export const ProfileInformationDetailsStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  .profileInformation__avatar {
    border-radius: 50%;
  }
  .details {
    width: 75%;
    .details__info {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-weight: 400;
        font-size: 18px;
      }
      border-bottom: 1px solid #e9e7f3;
    }
  }
`;

export const ProfileAvatarStyle = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  border: 4px solid #000;
  position: relative;
  img{
    width: 100%;
    height: 100%;
  }
  .ProfileAvatar__edit{
    background-color: #fff;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    right: -20px;
    bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12);
    i{
      width: 24px;
      height: 24px;
      font-size: 170%;
      transform: translate(0%, -10%);
    }
  }
`;

export const ProfileInormationBiographyStyle = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.35);
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .profileInformation__biography {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    font-weight: 500;
    font-size: 17px;
    border-bottom: 1px solid #e9e7f3;
  }
  .profileInformation__biography_text,
  .profileInformation__biography_area {
    padding: 0.5rem 1rem;
    font-size: 15px;
    height: 80px;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .profileInformation__biography_area {
    border: none;
    /* padding-bottom: 1rem; */
  }
`;
export const ProfileInformationInterestsStyle = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.35);
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  .profileInformation__tags {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    font-weight: 500;
    font-size: 17px;
    border-bottom: 1px solid #e9e7f3;
  }
  .profileInformation__tags_div {
    display: flex;
    padding: 0.5rem 1rem;
    height: 50px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    .profileInformation__tags_text {
      background-color: #0c7fda;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1.5rem;
      border-radius: 15px;
      color: #fff;
      font-size: 16px;
    }
  }
  .profileInformation__tags_edit {
    justify-content: flex-start !important;
    gap: 1rem;
    flex-wrap: nowrap;

    input {
      border: none;
      background-color: #f5f5f5;
      height: 100%;
      width: -webkit-fill-available;
      padding-left: 0.4rem;
      border-radius: 4px;
    }
  }
`;

export const ProfileGaleryStyle = styled.div`
  display: grid;
  overflow: scroll;
  width: 100%;
  height: 600px;
  padding: 1rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem 0rem;
  place-items: center;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  .photo__card {
    min-width: 240px;
    height: 440px;
    width: 350px;
    margin: 0rem 0 0.6rem;
    position: relative;
    :hover {
      .profilePhotos__deletemModal {
        display: block;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      border-radius: 5px;
    }
  }
`;

export const AddProfilePhotosStyle = styled.div`
  min-width: 240px;
  height: 440px;
  width: 350px;
  margin: 0rem 0 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  border: 1px dashed #aca9bb;
`;

export const ProfileMapStyle = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
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
