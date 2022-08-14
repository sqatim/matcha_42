import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  ProfileContentStyle,
} from "./ProfileContent.style";
import ProfileEditPassword from "./ProfileEditPassword";
import ProfileInformationContent from "./ProfileInformationContent";
import ProfileInformationEdit from "./ProfileInformationEdit";
import UserProfileButtons from "./UserProfileButtons";

// const tags = ["E_sport", "Football", "Books", "Travel", "Stroll"];

const ComponentType = ({ type, setEdit }) => {
  const components = {
    PROFILE: ProfileInformationEdit,
    PASSWORD: ProfileEditPassword,
  };
  const Component = components[type];
  return <Component setEdit={setEdit} />;
};

export default function ProfileInformation({ otherUser, userData }) {
  const [edit, setEdit] = useState(false);
  const [type, setType] = useState("");
  const { username } = useSelector((state) => state.user);
  return (
    <ProfileContentStyle>
      {otherUser == username && !edit && (
        <div className="ProfileContent__edit">
          <div
            className="ProfileContent__edit_child"
            onClick={() => {
              setType("PASSWORD");
              setEdit(!edit);
            }}
          >
            <p>Change password</p>
            <i className="fi fi-rr-lock"></i>
          </div>
          <div
            className="ProfileContent__edit_child"
            onClick={() => {
              setType("PROFILE");
              setEdit(!edit);
            }}
          >
            <p>Edit Profile</p>
            <i className="fi fi-rs-settings"></i>
          </div>
        </div>
      )}
      {otherUser != username && <UserProfileButtons id={userData._id}/>}
      <div>
        {!edit ? (
          <ProfileInformationContent
            otherUser={otherUser}
            userData={userData}
          />
        ) : (
          <ComponentType type={type} setEdit={setEdit} />
        )}
      </div>
    </ProfileContentStyle>
  );
}
