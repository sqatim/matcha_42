import styled from "styled-components";

export const ProfileContentStyle = styled.div`
  /* background-color: blue; */
  width: 100%;
  height: 100%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
export const ProfileInormationBiographyStyle = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.35);
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  .profileInformation__biography {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    font-weight: 500;
    font-size: 17px;
    border-bottom: 1px solid #e9e7f3;
  }
  .profileInformation__biography_text {
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
`;